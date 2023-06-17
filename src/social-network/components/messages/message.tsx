"use client";

import Link from "next/link";
import ReactPlayer from "react-player";
import Trolls from "./troll";
import ImageMessage from "./imageMessage";

//Component to display one message
export default function Message({
  date, //Date of the message
  authorId, //Author of the message
  content, //Content of the message
  authorIsMe, //Is the author the current user ?
  authorName, //Name of the author
  profilImage, //Image of the author
}: {
  dest: string;
  date: string;
  authorId: number;
  content: string;
  authorIsMe: boolean;
  authorName: string;
  profilImage: string;
}) {
  // console.log("image" + profilImage);
  return (
    <div
      className={
        authorIsMe === true
          ? "mt-2 flex flex-row-reverse gap-2 items-center"
          : "mt-2 flex gap-2 items-center"
      }
    >
      {/* TODO : <Avatar url={comment.profiles.avatar} /> */}
      {/* <Avatar size={""} editable={false} /> */}
      <div
        className={
          authorIsMe === true
            ? "bg-gray-300 py-2 px-4 rounded-3xl"
            : "bg-gray-200 py-2 px-4 rounded-3xl"
        }
      >
        <div>
          <Link
            href={"/profile/" + authorId}
            className="hover:underline font-semibold mr-1"
          >
            {authorName}
          </Link>{" "}
          {/* TODO </Link> */}
          <span className="text-sm text-gray-400">
            {/* <ReactTimeAgo timeStyle={'twitter'} date={(new Date(comment.created_at)).getTime()} /> */}
            {new Date(date).toLocaleDateString() +
              " " +
              new Date(date)
                .toTimeString()
                .slice(0, 5)
                .replace(":", "h")
                .replace(" ", "")}
          </span>
        </div>
        <div className="text-sm">
          {content === "Troll message" ? (
            <div>
              <Trolls
                styleLink="justify-center cursor-pointer inline-flex border border-textColor  items-center rounded-full p-1"
                display="Click to show the password"
              />
            </div>
          ) : content === "End challenge message" ? (
            <ImageMessage
              src="/img/disneyland.png"
              text=" Do you remember our first date at Disneyland ? You were so sweet,
            compared to my actual boyfriend. I love you so much Alexis 😍, I can't
            wait to see you again. 😚"
            />
          ) : //word with more than 50 characters
          (content.match(/ /g) || []).length == 0 && content.length > 30 ? (
            content.substring(0, 30) + "..."
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
}
