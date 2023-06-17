import { CameraIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Avatar({
  size,
  editable,
  url,
}: {
  size: string;
  url: string;
  editable: boolean;
}) {
  // parametre de Avatar size,url,editable,onChange

  let width = "w-12";

  if (size === "lg") {
    width = "w-24 md:w-28";
  }

  return (
    <div className={`${width} relative`}>
      <div className="rounded-full overflow-hidden">
        <Image src={url} alt="" height={200} width={200} />
      </div>

      {editable && (
        <label
          htmlFor="button-disabled"
          className="absolute bottom-0 right-0 shadow-md shadow-gray-500 p-2 bg-white rounded-full cursor-pointer"
        >
          <CameraIcon className="w-6" />
        </label>
      )}
    </div>
  );
}
