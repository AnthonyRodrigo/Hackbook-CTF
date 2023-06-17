import { getUserPosts } from "@/lib/dbRequests";
import { isNum } from "@/lib/utils/functions";
import { NextApiRequest, NextApiResponse } from "next";

// Retrieve 10 posts of a user
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (
    req.query.id !== undefined &&
    typeof req.query.id == "string" &&
    isNum(req.query.id)
  ) {
    const uid = parseInt(req.query.id);

    return res.json(await getUserPosts(uid));
  } else {
    return res.status(400);
  }
};
