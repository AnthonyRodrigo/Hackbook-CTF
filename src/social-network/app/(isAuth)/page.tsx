import PostCard from "@/components/post/postCard";
import PostFormCard from "@/components/postFormCard";
import { getFeedPosts } from "@/lib/dbRequests";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PostInterface } from "@/types/types";
import { getServerSession } from "next-auth/next";
import { Suspense } from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const posts: PostInterface[] = await getFeedPosts();

  return (
    <main className="flex flex-col mx-4 md:mx-0 md:w-9/12 mb-12 md:mb-0">
      <h1 className="text-3xl font-bold mb-5">
        Welcome on the social network of hackers
      </h1>
      {/* @ts-expect-error Server Component */}
      <PostFormCard />
      
      {posts?.length > 0 &&
        posts.map((post: PostInterface, i: number) => (
          <Suspense fallback={<p>Loading posts...</p>} key={i}>
            {/* @ts-expect-error Server Component */}
            <PostCard {...post} />
          </Suspense>
        ))}
    </main>
  );
}
