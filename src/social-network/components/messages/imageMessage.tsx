"use client";

import Image from "next/image";

//Client component to display an image inside a message
export default function imageMessage({
  src, //source of the image to display
  text, //text to display under the image
}: {
  src: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 py-2 fill">
      <Image src={src} alt="" height={500} width={500} />

      <p className="py-2">{text}</p>
    </div>
  );
}
