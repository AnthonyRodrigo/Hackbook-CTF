import { getFeedPosts } from "@/lib/dbRequests";
import { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  return res.json(await getFeedPosts());
};
