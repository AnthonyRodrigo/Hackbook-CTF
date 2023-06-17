import { getUser } from "@/lib/dbRequests";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const userId = parseInt(params.id);
  const userData = await getUser(userId);

  return (
    <div className="bg-white shadow-md shadow-gray-800 rounded-md p-4 mx-4 md:mx-0 md:w-9/12 mb-12 md:mb-0">
      <h2 className="text-3xl mb-2">About me</h2>
      <p className="mb-2 text-sm whitespace-pre-wrap">{userData.description}</p>
      {userData.links?.length > 0 &&
        userData.links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="hover:underline mr-1 text-blue-500"
          >
            #{link.textDisplay}
          </Link>
        ))}
    </div>
  );
}
