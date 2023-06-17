import { getUserPosts } from "@/lib/dbRequests";
import { PostInterface } from "@/types/types";
import Image from "next/image";

// Retrieve photos from the last 10 posts of the user
async function getPhotos(id: number) {
  const photos: Array<string> = [];

  const posts: PostInterface[] = await getUserPosts(id);

  posts.forEach((post: PostInterface) => {
    if (post.photos != null && post.photos.length > 0) {
      photos.push(...post.photos);
    }
  });

  return photos;
}

export default async function Page({ params }: { params: { id: string } }) {
  const userId = parseInt(params.id);
  const photos = await getPhotos(userId);

  return (
    <div className="bg-white shadow-md shadow-gray-800 rounded-md mx-4 md:mx-0 md:w-9/12 mb-12 md:mb-0 p-4">
      {photos?.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {photos.map((photo, i) => (
            <div
              className="rounded-md overflow-hidden h-48 flex items-center shadow-md"
              key={i}
            >
              <Image src={photo} width={900} height={400} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          🤕 The user hasn't published photos...{" "}
        </div>
      )}
    </div>
  );
}
