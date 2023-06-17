import { authOptions } from "@/pages/api/auth/[...nextauth]";
import {
  BookmarkIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  PencilIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import { MdHelpOutline } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import NavLink from "./navLink";

export default async function SideBar() {
  const session = await getServerSession(authOptions);
  const currentUserId: number = session?.user.id;

  const links = [
    {
      label: "Home",
      icon: <HomeIcon className="h-6" />,
      path: `/`,
      targetSegment: null,
    },
    {
      label: "Messages",
      icon: <ChatBubbleLeftIcon className="h-6" />,
      path: `/messages`,
      targetSegment: "messages",
    },
    {
      label: "Friends",
      icon: <UserGroupIcon className="h-6" />,
      path: `/profile/${currentUserId}/friends`,
      targetSegment: "friends",
    },
    {
      label: "Saved posts",
      icon: <BookmarkIcon className="h-6" />,
      path: `/saved`,
      targetSegment: "saved",
    },
    {
      label: "Help center",
      icon: <MdHelpOutline className="h-6" />,
      path: `/help`,
      targetSegment: "help",
    },
    {
      label: "Notes",
      icon: <PencilIcon className="h-6" />,
      path: `/notes`,
      targetSegment: "notes",
    },
    {
      label: "Logout",
      icon: <RiLogoutBoxLine className="h-6" />,
      path: `/login`,
      targetSegment: "login",
    },
  ];

  return (
    <div className="w-full mdMax:bottom-0 fixed flex justify-center items-center z-10 bg-white md:shadow-md md:shadow-gray-800 rounded-md md:w-48">
      <nav className="px-4  flex bg-white justify-between md:block  md:shadow-redColor md:shadow-none">
        {links.map((l, i) => (
          <NavLink
            key={i}
            label={l.label}
            icon={l.icon}
            path={l.path}
            targetSegment={l.targetSegment}
          />
        ))}
      </nav>
    </div>
  );
}
