"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

//Client component to display a rickroll
export default function Trolls({
  display, //Message to display in the button
  styleLink, //Style of the link
}: {
  display: string;
  styleLink: string;
}) {
  const [play, setPlay] = useState(false);

  return (
    <div>
      <button onClick={() => setPlay(!play)} className={styleLink}>
        {display}
      </button>
      <div className="flex flex-col gap-2 fill">
        {play === true ? (
          <div>
            <ReactPlayer
              url="https://www.youtube.com/embed/dQw4w9WgXcQ"
              playing={play}
              width="100%"
              height="100%"
              className="py-2 px-4 rounded-3xl"
              controls={false}
            />

            <p className="text-center"> Ahah got you ! </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
