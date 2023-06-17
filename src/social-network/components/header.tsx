import { getUser } from "@/lib/dbRequests";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/img/logo.png";

export default async function Header() {
  const session = await getServerSession(authOptions);
  const currentUserId: number = session?.user.id;
  const currentUserData = await getUser(currentUserId);
  const currentUserPhoto = currentUserData?.photo;

  return (
    <header className="md:fixed z-10 md:z-50 w-full px-6 md:px-12 lg:px-24 ">
      {/* Desktop & Tablette */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex mt-4 items-center gap-2">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              className="w-24 min-h-[60px] min-w-[200px] object-cover cursor-pointer"
            />
          </Link>
        </div>

        {/* Login */}
        <Link href={"/profile/" + currentUserId}>
          <div className="flex items-center gap-8 cursor-pointer">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <Image
                  src={currentUserPhoto}
                  width={200}
                  height={200}
                  className="w-full border h-auto"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden mt-4 px-3 w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              className="h-[110px] w-[140px] object-cover cursor-pointer"
            />
          </Link>
        </div>

        {/* Login */}
        <Link href={"/profile/" + currentUserId}>
          <div className="flex items-center gap-8 cursor-pointer">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <Image
                  src={currentUserPhoto}
                  width={200}
                  height={200}
                  className="w-full h-auto"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
