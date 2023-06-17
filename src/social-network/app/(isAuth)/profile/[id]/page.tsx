import PostCard from "@/components/post/postCard";
import { getUserPosts } from "@/lib/dbRequests";
import { PostInterface } from "@/types/types";
import { Suspense } from "react";

export default async function PostsList({
  params,
}: {
  params: { id: string };
}) {
  const userId = parseInt(params.id);
  const posts = await getUserPosts(userId);

  return (
    <div className="mx-4 md:mx-0 md:w-9/12 mb-12 md:mb-0">
      {posts?.length > 0 ? (
        posts.map((post: PostInterface, i: number) => (
          <Suspense fallback={<p>Loading posts...</p>} key={i}>
            {/* @ts-expect-error Server Component */}
            <PostCard {...post} />
          </Suspense>
        ))
      ) : (
        <div className="text-center">🤕 The user hasn't published post... </div>
      )}
    </div>
  );
}
