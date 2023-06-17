"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function TabLink({
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
  const activeSegment = useSelectedLayoutSegment();
  return (
    <Link
      className={
        "flex gap-1 px-4 py-1 items-center " +
        (activeSegment === targetSegment
          ? "border-redColor border-b-4 text-redColor font-bold"
          : "border-b-4 border-b-white")
      }
      href={path}
    >
      {icon}
      <span className="hidden sm:block">{label}</span>
    </Link>
  );
}
