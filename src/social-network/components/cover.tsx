import { CameraIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Cover({
  url,
  editable,
}: {
  url: string;
  editable: boolean;
}) {
  // paramètre de la fonction urlImgCover, editable, onChange

  return (
    <div className="h-36 overflow-hidden flex justify-center items-center relative">
      <div>
        <Image src={url} fill className="w-full h-auto" alt="cover image" />
      </div>

      {editable && (
        <div className="absolute right-0 bottom-0 m-2">
          <label
            htmlFor="button-disabled"
            className="flex items-center gap-1 bg-white py-1 px-2 rounded-md shadow-md shadow-black cursor-pointer"
          >
            <CameraIcon className="w-6" />
            Change cover image
          </label>
        </div>
      )}
    </div>
  );
}
