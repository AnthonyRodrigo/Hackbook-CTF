import FriendInfo from "@/components/friendInfo";
import { getUser } from "@/lib/dbRequests";
import { ProfileInterface } from "@/types/types";

async function getFriends(userId: number) {
  const userData: ProfileInterface = await getUser(userId);
  return userData.friends;
}

export default async function Page({ params }: { params: { id: string } }) {
  const userId = parseInt(params.id);
  const friends = await getFriends(userId);

  return friends?.length > 0 ? (
    <div className="bg-white shadow-md shadow-gray-800 rounded-md p-4 mx-4 md:mx-0 md:w-9/12 mb-12 md:mb-0">
      <h2 className="text-3xl mb-2">Friends</h2>
      <div>
        {friends.map((friendId, i) => (
          <div className="border-b border-b-gray-100 p-4 -mx-4" key={i}>
            {/* @ts-expect-error Server Component */}
            <FriendInfo friendId={friendId} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="text-center">🤕 The user hasn't friends... </div>
  );
}
