"use client";

import { useEffect, useState } from "react";
import Avatar from "@/components/avatar";
import axios from "axios";
import Message from "@/components/messages/message";
import DOMPurify from "dompurify";
import { HiAnnotation } from "react-icons/hi";

//Client component to display a entire conversation
export default function Messages({
  imageFriend,
  pseudoFriend,
  idFriend,
  imageUser,
  pseudoUser,
  idUser,
}: {
  imageFriend: string;
  pseudoFriend: string;
  idFriend: number;
  imageUser: string;
  pseudoUser: string;
  idUser: number;
}) {
  //Message to send
  const [messageText, setMessageText] = useState("");

  //Messages already exchanged
  const [messages, setMessages] = useState([]);
  const [db_name, setDb_name] = useState("");

  //Load messages already sent
  useEffect(() => {
    //Possible names of the db
    let name_file_first_way = "message_" + idUser + "_" + idFriend;
    let name_file_second_way = "message_" + idFriend + "_" + idUser;

    //No db yet
    if (
      localStorage.getItem(name_file_first_way) === null &&
      localStorage.getItem(name_file_second_way) === null
    ) {
      localStorage.setItem(name_file_first_way, JSON.stringify([]));
      setDb_name(name_file_first_way);

      //One db already exists with the current user as author
    } else if (
      localStorage.getItem(name_file_first_way) === null &&
      localStorage.getItem(name_file_second_way) !== null
    ) {
      let mess = JSON.parse(localStorage.getItem(name_file_second_way));
      setDb_name(name_file_second_way);
      setMessages(mess);

      //One db already exists with the current user as target
    } else if (
      localStorage.getItem(name_file_first_way) !== null &&
      localStorage.getItem(name_file_second_way) === null
    ) {
      let mess = JSON.parse(localStorage.getItem(name_file_first_way));
      setDb_name(name_file_first_way);
      setMessages(mess);
      //Two dbs already exist => merge them
    } else {
      let mess = JSON.parse(localStorage.getItem(name_file_first_way));
      localStorage.removeItem(name_file_second_way);
      setDb_name(name_file_first_way);
      setMessages(mess);
    }
  }, []);

  //Send a message to the server
  function postMessage(ev: any) {
    ev.preventDefault();

    //Erase the message once sent
    setMessageText("");

    //Do the POST request
    axios
      .post("/api/send", {
        // Data to be sent to the server
        destination: idFriend,
        author: idUser,
        message: DOMPurify.sanitize(messageText),
      })

      //Get the answer from the server
      .then((response) => {
        //Create the JSON associated with sent message

        let newMessage = {
          destination: idFriend,
          author: idUser,
          message: DOMPurify.sanitize(messageText.toString()),
          date: new Date(),
        };
        //get the answer from the server
        let answer = response.data;

        answer.message = DOMPurify.sanitize(answer.message.toString());
        //Update state to render the new message
        setMessages((prev) => [...prev, newMessage, answer]);

        //Update the db
        localStorage.setItem(
          db_name,
          JSON.stringify(messages.concat([newMessage, answer]))
        );
      })

      .catch(function (error) {
        console.error(error);
        alert("Error while sending the message");
      });
  }

  return (
    <div className="bg-white shadow-md shadow-gray-800 rounded-md p-4 mx-4 md:mx-0 md:w-9/12 mb-12 md:mb-0">
      <div>
        {/* display the messages */}
        {(messages.length > 0 &&
          messages.map((comment) => (
            <Message
              key={
                comment.date +
                "_" +
                comment.author +
                "_" +
                comment.content +
                "_" +
                comment.destination
              }
              profilImage={comment.author === idUser ? imageUser : imageFriend}
              date={comment.date}
              authorId={comment.author}
              authorName={comment.author === idUser ? pseudoUser : pseudoFriend}
              content={comment.message}
              authorIsMe={comment.author == idUser}
            />
          ))) ||
          (messages.length === 0 && (
            <p className="flex flex-row justify-center items-center text-xl font-bold mb-5 p-4">
              No message yet, try to send one{" "}
              <HiAnnotation className="text-xl ml-2" />{" "}
            </p>
          ))}
      </div>

      {/* form to send a message */}
      <div className="flex mt-4 gap-3">
        <div>
          <Avatar size={""} editable={false} url={imageUser.toString()} />
        </div>
        <div className="border grow rounded-full relative">
          <form onSubmit={postMessage}>
            <input
              value={messageText}
              onChange={(ev) => setMessageText(ev.target.value)}
              className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full"
              placeholder="Leave a message"
            />
          </form>

          {/* <button className="absolute top-3 right-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
}
