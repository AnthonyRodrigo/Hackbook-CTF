"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import {  useRouter, useSelectedLayoutSegment } from "next/navigation";
import Load from "@/components/loader/loading";
import { useEffect, useState } from "react";

export default function NavLink({
  label,
  icon,
  path,
  targetSegment,
}: {
  label: string;
  icon: JSX.Element;
  path: string;
  targetSegment: string | null;
}) {
  //const router = useRouter();
  const activeSegment = useSelectedLayoutSegment();
  const [isLoading, setIsLoading] = useState(false);

  function logout() {
    setIsLoading(true)
    signOut();
    //router.push('/login')
  }

  // useEffect(() => {
  //   if (activeSegment === targetSegment){
  //     console.log("******")
  //     setIsLoading(false)
  //   }
  // })

  if (targetSegment === "login") {
    return (
      <div>
        {/* {isLoading && (
          <Load/>
        )} */}
        <button onClick={logout} className="w-full h-full">
          <Link
            className={
              "text-lg font-semibold md:text-md flex gap-1 md:gap-3 px-6 rounded-md items-center " +
              (activeSegment === targetSegment
                ? "py-3 my-1 bg-redColor text-white md:-mx-7 md:px-7 shadow-md shadow-gray-800"
                : "py-2 my-2 hover:bg-redColor hover:bg-opacity-20 md:-mx-4 md:px-4  transition-all hover:scale-110 hover:shadow-md shadow-gray-300")
            }
            href={path}
          >
            {icon}
            <span className="hidden md:block">{label}</span>
          </Link>
        </button>
      </div>
    );
  } else {
    return (
      <button onClick={()=>setIsLoading(true)} className="w-full h-full">
        {/* {isLoading && activeSegment != targetSegment && (
          <Load/>
        )} */}
        <Link
          className={
            "text-lg font-semibold md:text-md flex gap-1 md:gap-3 px-6 rounded-md items-center " +
            //(isLoading ? "bg-redColor bg-opacity-20" : "")+
            (activeSegment === targetSegment
              ? "py-3 my-1 bg-redColor bg-opacity-100 text-white md:-mx-7 md:px-7 shadow-md shadow-gray-800"
              : "py-2 my-2 hover:bg-redColor hover:bg-opacity-20 md:-mx-4 md:px-4  transition-all hover:scale-110 hover:shadow-md shadow-gray-300")
          }
          href={path}
        >
          {icon}
          <span className="hidden md:block">{label}</span>
        </Link>
      </button>
    );
  }
}
