import { getUser } from "@/lib/dbRequests";
import { CommentInterface, ProfileInterface } from "@/types/types";
import Link from "next/link";
import Avatar from "../avatar";

export default async function Comment({
  comment,
}: {
  comment: CommentInterface;
}) {
  const date = new Date(comment.createdOn.toString());
  const userData: ProfileInterface = await getUser(comment.userId);

  return (
    <div className="mt-2 flex gap-2 items-center">
      <Link href={"/profile/" + comment.userId}>
        <Avatar url={userData.photo.toString()} size={""} editable={false} />
      </Link>
      <div className="bg-gray-200 py-2 px-4 rounded-3xl">
        <div>
          <Link href={"/profile/" + comment.userId}>
            <span className="hover:underline font-semibold mr-1">
              {userData.name}
            </span>
          </Link>
          <span className="text-sm text-gray-400">
            {date.toLocaleString("fr-FR")}
          </span>
        </div>
        <p className="text-sm">{comment.text}</p>
      </div>
    </div>
  );
}
