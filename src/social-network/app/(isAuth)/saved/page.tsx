import PostCard from "@/components/post/postCard";
import { getSavedPosts } from "@/lib/dbRequests";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PostInterface } from "@/types/types";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export const metadata = {
  title: "Saved Posts",
};

export default async function SavedPosts() {
  const session = await getServerSession(authOptions);
  const currentUserId: number = session?.user.id;
  const posts = await getSavedPosts(currentUserId);

  return (
    <div className="mx-4 md:mx-0 md:w-9/12">
      <h1
        className="text-4xl font-bold mb-4 text-redColor relative 
            before:absolute before:rounded-lg before:content before:w-20 before:h-1 
            before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-200 to-redColor transition-all ease-in-out
            duration-100"
      >
        Saved posts
      </h1>
      {posts.length > 0 &&
        posts.map((post: PostInterface, i: number) => (
          <Suspense fallback={<p>Loading posts...</p>} key={i}>
            {/* @ts-expect-error Server Component */}
            <PostCard {...post} />
          </Suspense>
        ))}
    </div>
  );
}
