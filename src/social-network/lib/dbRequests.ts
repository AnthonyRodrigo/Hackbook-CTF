import { NotesInterface, PostInterface, ProfileInterface } from "@/types/types";
import { cache } from "react";
import clientPromise from "./mongodb";

// Retrieve user information
export const getUser = cache(async (userId: number) => {
  try {
    const client = await clientPromise;
    const db = client.db("social-network");

    return await db
      .collection<ProfileInterface>("users")
      .findOne({ id: userId });
  } catch (e) {
    console.error(e);
  }

  return null;
});

// Retrieve last saved posts
export const getSavedPosts = cache(async (userId: number) => {
  try {
    const client = await clientPromise;
    const db = client.db("social-network");

    return await db
      .collection<PostInterface>("posts")
      .find({ saved: userId })
      .sort({ createdOn: -1 })
      .toArray();
  } catch (e) {
    console.error(e);
  }

  return null;
});

// // Retrieve one post
// export async function getPost(postId: string) {
//   const res = await fetch(`${process.env.BASE_FETCH_URL}/api/post/${postId}`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

// Retrieve last posts
export const getFeedPosts = cache(async () => {
  try {
    const client = await clientPromise;
    const db = client.db("social-network");

    const posts = await db
      .collection<PostInterface>("posts")
      .find({})
      .sort({ createdOn: -1 })
      .toArray();

    return posts;
  } catch (e) {
    console.error(e);
  }
  return [];
});

// Retrieve last user's posts
export const getUserPosts = cache(async (id: number) => {
  try {
    const client = await clientPromise;
    const db = client.db("social-network");

    return await db
      .collection<PostInterface>("posts")
      .find({ userId: id })
      .sort({ createdOn: -1 })
      .toArray();
  } catch (e) {
    console.error(e);
  }

  return [];
});

// Retrieve user's notes
export const getUserNotes = cache(async (id: number) => {
  try {
    const client = await clientPromise;
    const db = client.db("social-network");

    return await db
      .collection<NotesInterface>("notes")
      .find({ userId: id })
      .sort({ createdOn: -1 })
      .toArray();
  } catch (e) {
    console.error(e);
  }

  return [];
});
