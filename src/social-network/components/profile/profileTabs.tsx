import TabLink from "@/components/profile/tabLink";
import {
  DocumentTextIcon,
  InformationCircleIcon,
  PhotoIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function ProfileTabs({ userId }: { userId: number }) {
  // paramètre : userId

  const links = [
    {
      label: "Posts",
      icon: <DocumentTextIcon className="h-6" />,
      path: `/profile/${userId}`,
      targetSegment: null,
    },
    {
      label: "About",
      icon: <InformationCircleIcon className="h-6" />,
      path: `/profile/${userId}/about`,
      targetSegment: "about",
    },
    {
      label: "Friends",
      icon: <UserGroupIcon className="h-6" />,
      path: `/profile/${userId}/friends`,
      targetSegment: "friends",
    },
    {
      label: "Photos",
      icon: <PhotoIcon className="h-6" />,
      path: `/profile/${userId}/photos`,
      targetSegment: "photos",
    },
  ];

  return (
    <div className="mt-4 md:mt-10 flex gap-0">
      {links.map((l, i) => (
        <TabLink key={i} {...l} />
      ))}
    </div>
  );
}
