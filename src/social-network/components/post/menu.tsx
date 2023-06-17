import {
  BellAlertIcon,
  BookmarkIcon,
  BookmarkSlashIcon,
  EllipsisHorizontalIcon,
  EyeSlashIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function Menu({ isSaved }: { isSaved: boolean }) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="text-gray-400 cursor-pointer">
        <EllipsisHorizontalIcon className="w-6" />
      </label>
      <div className="dropdown-content menu bg-white shadow-md shadow-gray-300 p-3 rounded-sm border border-gray-100 w-52">
        <label htmlFor="button-disabled" className="w-full -my-2">
          <span className="flex -mx-4 hover:shadow-md gap-3 py-2 my-2 hover:bg-redColor hover:bg-opacity-20 px-4 rounded-md transition-all hover:scale-110 shadow-gray-300">
            {isSaved && <BookmarkIcon className="w-6" />}
            {!isSaved && <BookmarkSlashIcon className="w-6" />}
            {isSaved ? "Remove from saved" : "Save post"}
          </span>
        </label>
        <label
          htmlFor="button-disabled"
          className="flex gap-3 py-2 my-2 hover:bg-redColor hover:bg-opacity-20 -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
        >
          <BellAlertIcon className="w-6" />
          Turn notifications
        </label>
        <label
          htmlFor="button-disabled"
          className="flex gap-3 py-2 my-2 hover:bg-redColor hover:bg-opacity-20 -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
        >
          <EyeSlashIcon className="w-6" />
          Hide post
        </label>
        <label
          htmlFor="button-disabled"
          className="flex gap-3 py-2 my-2 hover:bg-redColor hover:bg-opacity-20 -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
        >
          <TrashIcon className="w-6" />
          Delete
        </label>
      </div>
    </div>
  );
}
