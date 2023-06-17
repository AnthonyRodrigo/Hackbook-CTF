import Avatar from "@/components/avatar";
import Link from "next/link";

export const metadata = {
  title: "Notifications",
};

export default function Notifications() {
  return (
    <div className="mx-4 md:mx-0">
      <h1
        className="text-4xl font-bold mb-4 text-redColor relative 
            before:absolute before:rounded-lg before:content before:w-20 before:h-1 
            before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-200 to-redColor transition-all ease-in-out
            duration-100"
      >
        Notifications
      </h1>
      <div className="bg-white shadow-md shadow-gray-800 rounded-md mb-5">
        <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
          <Link href={"/profile"}>
            {/* TODO : Retrieve photo of the friend */}
            <Avatar url={"/img/avatar.png"} size={""} editable={false} />
          </Link>
          <div>
            <Link
              href={"/profile"}
              className={"font-semibold mr-1 hover:underline"}
            >
              John Doe
            </Link>
            liked
            <Link href={""} className={"ml-1 text-redColor hover:underline"}>
              your photo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
