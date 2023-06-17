import Avatar from "@/components/avatar";
import PreviewConversation from "@/components/messages/previewConversation";
import { getUser } from "@/lib/dbRequests";
import { ProfileInterface } from "@/lib/types";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { FaRegSadCry } from "react-icons/fa";

export const metadata = {
  title: "Messages",
};

//get the friends data from DB
async function getFriends(userId: number) {
  const userData: ProfileInterface = await getUser(userId);
  let friends = [];
  let i: number;
  for (let i = 0; i < userData.friends.length; i++) {
    let friendId = userData.friends[i];
    let friendData: ProfileInterface = await getUser(friendId);
    friends.push(friendData);
  }
  return friends;
}

//Display a preview of all the conversations
export default async function Messages() {
  //get the current user id from session
  const session = await getServerSession(authOptions);
  let userId = parseInt(session?.user?.id);

  //get the friends of the current user from DB
  let friends = await getFriends(userId);

  return (
    <div className="flex flex-col mx-4 md:mx-0">
      <h1
        className="text-4xl font-bold mb-4 text-redColor relative 
            before:absolute before:rounded-lg before:content before:w-20 before:h-1 
            before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-200 to-redColor transition-all ease-in-out
            duration-100"
      >
        Messages
      </h1>

      <div className="bg-white shadow-md shadow-gray-800 rounded-md  p-4 mx-4 md:mx-0 md:w-9/12 mb-12 md:mb-0">
        <div className="flex flex-col">
          {/* display each conversation */}
          {(friends.length > 0 &&
            friends.map((friend) => (
              <div
                key={friend.id}
                className="flex flex-row gap-2 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
              >
                {/* Display avatar of each friend*/}
                <Link href={"/profile/" + friend.id}>
                  <Avatar
                    size={""}
                    editable={false}
                    url={friend.photo.toString()}
                  />
                </Link>
                <div className="flex flex-col">
                  {/* link to conversation */}
                  <Link
                    className=""
                    href={"/messages/conversation/" + friend.id}
                  >
                    <p className="font-semibold mr-1">{friend.name}</p>
                    <PreviewConversation
                      friendId={friend.id}
                      friendPseudo={friend.pseudo}
                      userId={userId}
                      userPseudo={session?.user?.name}
                    />
                  </Link>{" "}
                  {/* first message of the conversation */}
                </div>
              </div>
            ))) ||
            (friends.length == 0 && (
              <p className="flex flex-row justify-center items-center text-xl font-bold mb-5 p-4">
                No friend yet <FaRegSadCry className="text-xl ml-2" />{" "}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
