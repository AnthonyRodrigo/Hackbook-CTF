export const metadata = {
  title: "Messages",
};

import Messages from "@/components/messages/messages";
import { getUser } from "@/lib/dbRequests";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

//Client component to display a entire conversation
export default async function Conversation({
  params,
}: {
  params: { friend: string };
}) {
  //Person to send the message to
  let idFriend = parseInt(params.friend);
  let friendData = await getUser(idFriend).then((data) =>
    data === null ? redirect("/messages") : data
  );

  //get the current user id from session
  const session = await getServerSession(authOptions);
  let userId = parseInt(session?.user?.id);

  //get the user data from DB
  let userData = await getUser(userId);

  //check if the friend is a friend of the user
  if (!userData.friends.includes(idFriend)) {
    //redirect to messages page
    redirect("/messages");
  } else {
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

        <Messages
          imageFriend={friendData.photo.toString()}
          pseudoFriend={friendData.pseudo.toString()}
          idFriend={friendData.id}
          imageUser={userData.photo.toString()}
          pseudoUser={userData.pseudo.toString()}
          idUser={userData.id}
        />
      </div>
    );
  }
}
