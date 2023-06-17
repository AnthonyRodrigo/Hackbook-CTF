import Avatar from "@/components/avatar";
import Cover from "@/components/cover";
import ProfileTabs from "@/components/profile/profileTabs";
import { getUser } from "@/lib/dbRequests";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { MapPinIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth/next";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Profile",
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const userId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const currentUserId: number = session?.user.id;

  const isMyUser = userId === currentUserId;
  const editMode = false;

  const userData = await getUser(userId);

  if (!userData) {
    notFound();
  }

  return (
    <div>
      <div className="bg-white shadow-md shadow-gray-800 rounded-md mx-4 md:mx-0 md:w-9/12 mb-5 md:mb-5">
        <div className="relative overflow-hidden rounded-md">
          <Cover url={userData.cover.toString()} editable={isMyUser} />
          <div className="absolute top-24 left-4 z-20">
            <Avatar
              url={userData.photo.toString()}
              size={"lg"}
              editable={isMyUser}
            />
          </div>
          <div className="p-4 pt-0 md:pt-4 pb-0">
            <div className="ml-24 md:ml-40 flex justify-between">
              <div>
                {editMode && (
                  <div>
                    <input
                      type="text"
                      className="border py-2 px-3 rounded-md"
                      placeholder={"Your name"}
                      value={userData.name}
                    />
                  </div>
                )}
                {!editMode && (
                  <div>
                    <span className="text-3xl font-bold mr-4">
                      {userData?.name}
                    </span>
                    <span className="text-xl font-light">
                      @{userData.pseudo}
                    </span>
                  </div>
                )}
                {!editMode && (
                  <div className="flex items-center text-gray-500 leading-4">
                    <MapPinIcon className="h-6 mr-2" />
                    {userData.location}
                  </div>
                )}
                {editMode && (
                  <div>
                    <input
                      type="text"
                      className="border py-2 px-3 rounded-md mt-1"
                      placeholder={"Your location"}
                      value={userData.location}
                    />
                  </div>
                )}
              </div>
              <div className="grow">
                <div className="text-right">
                  {isMyUser && !editMode && (
                    <label
                      htmlFor="button-disabled"
                      className="inline-flex mx-1 gap-1 bg-white rounded-md shadow-sm shadow-gray-500 py-1 px-2"
                    >
                      <PencilSquareIcon className="w-6" />
                      Edit profile
                    </label>
                  )}
                  {isMyUser && editMode && (
                    <button className="inline-flex mx-1 gap-1 bg-white rounded-md shadow-sm shadow-gray-500 py-1 px-2">
                      Save profile
                    </button>
                  )}
                  {isMyUser && editMode && (
                    <button
                      //onClick={() => setEditMode(false)}
                      className="inline-flex mx-1 gap-1 bg-white rounded-md shadow-sm shadow-gray-500 py-1 px-2"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
            <ProfileTabs userId={userId} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
