"use client";

import { useEffect, useState } from "react";

//component to display last message sent in a conversation
export default function PreviewConversation({
  userId, //current logged user
  friendId, //person to talk
  friendPseudo, //pseudo of the person to talk
  userPseudo, //photo of the person to talk
}: {
  userId: number;
  friendId: number;
  friendPseudo: string;
  userPseudo: string;
}) {
  //last message of the conversation
  const [last_message, setLast_message] = useState("");

  //Get the last message sent to store it in the state and display it later
  useEffect(() => {
    let last_message;

    //possible name of the db
    let name_file_first_way = "message_" + userId + "_" + friendId;
    let name_file_second_way = "message_" + friendId + "_" + userId;

    //Retrieve the last message
    if (
      localStorage.getItem(name_file_first_way) !== null &&
      localStorage.getItem(name_file_second_way) === null
    ) {
      //if the db with the current user as author exists
      let mess = JSON.parse(localStorage.getItem(name_file_first_way));
      last_message = mess[mess.length - 1];
    } else if (
      localStorage.getItem(name_file_first_way) === null &&
      localStorage.getItem(name_file_second_way) !== null
    ) {
      //if the db with the current user as target exists
      let mess = JSON.parse(localStorage.getItem(name_file_second_way));
      last_message = mess[mess.length - 1];
    } else if (
      localStorage.getItem(name_file_first_way) !== null &&
      localStorage.getItem(name_file_second_way) !== null
    ) {
      //if both db exist => merge them
      let mess1 = JSON.parse(localStorage.getItem(name_file_first_way));
      let mess2 = JSON.parse(localStorage.getItem(name_file_second_way));
      if (mess1.length > mess2.length) {
        last_message = mess1[mess1.length - 1];
      } else {
        last_message = mess2[mess2.length - 1];
      }
    }
    setLast_message(last_message);
  }, []);

  console.log(last_message);
  return (
    <div className="flex  p-1 rounded-lg cursor-pointer">
      <span className="text-sm text-gray-400 ">
        {last_message === undefined
          ? "No message yet"
          : last_message.author == friendPseudo
          ? userPseudo + " : " + last_message.message
          : friendPseudo + " : " + last_message.message}
      </span>
    </div>
  );
}
