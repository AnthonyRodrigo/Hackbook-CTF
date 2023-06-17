import { getUser } from "@/lib/dbRequests";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import {
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { MdPeopleOutline } from "react-icons/md";
import Avatar from "./avatar";

export default async function PostFormCard({}) {
  const session = await getServerSession(authOptions);
  const currentUserId: number = session?.user.id;
  const userData = await getUser(currentUserId);

  if (userData === null) {
    console.error();
    signOut();
    return;
  }

  return (
    <div className="bg-white shadow-md shadow-gray-800 rounded-md mb-5 p-4">
      <div className="flex gap-2">
        <Avatar url={userData.photo.toString()} size={""} editable={false} />
        <textarea
          className="textarea textarea-bordered grow p-3 min-h-[3.5rem]"
          placeholder={`Whats on your mind, ${userData.name}?`}
        />
      </div>
      <div className="flex gap-5 items-center mt-2 pt-2">
        <label className="flex gap-1 cursor-pointer" htmlFor="button-disabled">
          <PhotoIcon className="w-6 h-6" />
          <span className="hidden xl:block">Photos</span>
        </label>
        <label className="flex gap-1 cursor-pointer" htmlFor="button-disabled">
          <MdPeopleOutline className="w-6 h-6" />
          <span className="hidden xl:block">People</span>
        </label>
        <label className="flex gap-1 cursor-pointer" htmlFor="button-disabled">
          <MapPinIcon className="w-6 h-6" />
          <span className="hidden xl:block">Check in</span>
        </label>
        <label className="flex gap-1 cursor-pointer" htmlFor="button-disabled">
          <FaceSmileIcon className="w-6 h-6" />
          <span className="hidden xl:block">Mood</span>
        </label>
        <div className="grow text-right cursor-pointer">
          <label
            className="bg-redColor text-white px-6 py-2 rounded-md cursor-pointer"
            htmlFor="button-disabled"
          >
            Share
          </label>
        </div>
      </div>
    </div>
  );
}
