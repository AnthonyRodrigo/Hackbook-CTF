import {
  ChatBubbleLeftIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

export default function Stats({
  numLikes,
  numComments,
  numShare,
  isLikedByMe,
}: {
  numLikes: number;
  numComments: number;
  numShare: number;
  isLikedByMe: boolean;
}) {
  return (
    <div className="mt-5 flex gap-8">
      <label
        htmlFor="button-disabled"
        className="flex gap-2 items-center cursor-pointer"
      >
        <HeartIcon
          className={"w-6 h-6 " + (isLikedByMe ? "fill-red-500" : "")}
        />
        {numLikes}
      </label>
      <label
        htmlFor="button-disabled"
        className="flex gap-2 items-center cursor-pointer"
      >
        <ChatBubbleLeftIcon className="w-6 h-6" />
        {numComments}
      </label>
      <label
        htmlFor="button-disabled"
        className="flex gap-2 items-center cursor-pointer"
      >
        <ShareIcon className="w-6 h-6" />
        {numShare}
      </label>
    </div>
  );
}
