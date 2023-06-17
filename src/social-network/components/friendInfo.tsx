import { getUser } from "@/lib/dbRequests";
import { ProfileInterface } from "@/types/types";
import Link from "next/link";
import Avatar from "./avatar";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { notFound } from "next/navigation";

async function howManyMutual(
  userData: ProfileInterface,
  currentUserId: number
) {
  const currentUserData = await getUser(currentUserId);

  if (!currentUserData) {
    signOut();
    return 0;
  }

  const commonFriends = currentUserData.friends.filter((value) =>
    userData.friends.includes(value)
  );

  return commonFriends !== null ? commonFriends.length : 0;
}

export default async function FriendInfo({ friendId }: { friendId: number }) {
  const userData = await getUser(friendId);
  const session = await getServerSession(authOptions);
  const currentUserId: number = session?.user.id;
  let you: Boolean = false;

  if (friendId === currentUserId) {
    you = true;
  }
  if (!userData) {
    notFound();
  }

  const mutuals = await howManyMutual(userData, currentUserId);

  const sizeImage = "";
  return (
    <Link href={"/profile/" + friendId}>
      <div className="flex gap-2">
        <Avatar
          url={userData.photo.toString()}
          size={sizeImage}
          editable={false}
        />
        <div>
          <h3 className="font-bold text-xl">{userData.name}</h3>
          <div className="text-sm leading-3">
            {you ? "it's you" : mutuals + " mutual friends"}
          </div>
        </div>
      </div>
    </Link>
  );
}
