import { getUser } from "@/lib/dbRequests";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Avatar from "../avatar";

export default async function NewComment({}) {
  const session = await getServerSession(authOptions);
  const userId: number = session?.user.id;
  const userData = await getUser(userId);

  if (userData === null) {
    console.error();
    signOut();
    return;
  }

  return (
    <div className="flex mt-4 gap-3">
      <div>
        <Avatar url={userData.photo.toString()} size={""} editable={false} />
      </div>
      <div className="border grow rounded-full relative">
        <input
          className="block w-full p-3 px-4 bg-white overflow-hidden h-12 rounded-full"
          placeholder="Leave a comment"
        />
        <label
          htmlFor="button-disabled"
          className="absolute top-3 right-3 text-gray-400"
        >
          <PhotoIcon className="w-6" />
        </label>
      </div>
    </div>
  );
}
