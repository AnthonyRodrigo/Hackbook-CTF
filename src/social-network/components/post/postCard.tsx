import Image from "next/image";
import Link from "next/link";
import Avatar from "../avatar";
import Comment from "./comment";
import Stats from "./stats";

import Menu from "./menu";
import NewComment from "./newComment";

import { getUser } from "@/lib/dbRequests";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PostInterface } from "@/types/types";
import { getServerSession } from "next-auth";
import Trolls from "../messages/troll";

export default async function PostCard(post: PostInterface) {
  //paramètre : id,text,created_at,photos,profiles:authorProfile
  const date = new Date(post.createdOn.toString());
  const session = await getServerSession(authOptions);
  const currentUserId: number = session?.user.id;
  const userData = await getUser(post.userId);
  const isLikedByMe = post.likes.includes(currentUserId);

  return (
    <div className="bg-white shadow-md shadow-gray-800 rounded-md mb-5 p-4">
      <div className="flex gap-3">
        <div>
          <Link href={"/profile/" + post.userId}>
            <span className="cursor-pointer">
              <Avatar
                size={""}
                editable={false}
                url={userData.photo.toString()}
              />
            </span>
          </Link>
        </div>
        <div className="grow">
          <p>
            <Link href={"/profile/" + post.userId}>
              <span className="mr-1 font-semibold cursor-pointer hover:underline">
                {userData.name}
              </span>
            </Link>
            shared a post
          </p>
          <p className="text-gray-500 text-sm">
            {date.toLocaleString("fr-FR")}
          </p>
        </div>
        <Menu isSaved={post.saved.includes(currentUserId)} />
      </div>
      <div>
        {/* preserve \t and \n special character*/}
        <p className="my-3 text-sm whitespace-pre-wrap">{post.text}</p>

        {post.links?.length > 0 &&
          post.links.map((link) =>
            link.url === "https://www.youtube.com/watch?v=dQw4w9WgXcQ" ? (
              <Trolls
                key={link.url}
                display="@THEFramework"
                styleLink="hover:underline mr-1 text-blue-500"
              />
            ) : (
              <Link
                key={link.url}
                href={link.url}
                className="hover:underline mr-1 text-blue-500"
              >
                @{link.textDisplay}
              </Link>
            )
          )}
        {post.photos?.length > 0 && (
          <div className="flex gap-4 mt-4">
            {post.photos.map((photo) => (
              <Image
                src={photo}
                className="rounded-md w-full h-auto"
                alt=""
                width={1000}
                height={400}
                key={photo}
              />
            ))}
          </div>
        )}
      </div>
      <Stats
        numLikes={post.likes.length}
        numComments={post.comments.length}
        numShare={post.shares}
        isLikedByMe={isLikedByMe}
      />
      {/* @ts-expect-error Server Component */}
      <NewComment />
      <div>
        {post.comments.length > 0 &&
          post.comments.map((comment, i) => (
            /* @ts-expect-error Server Component */
            <Comment key={i} comment={comment} />
          ))}
      </div>
    </div>
  );
}
