import { getUser } from "@/lib/dbRequests";
import { isNum } from "@/lib/utils/functions";
import { NextApiRequest, NextApiResponse } from "next";

// Get user data
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (
    req.query.id !== undefined &&
    typeof req.query.id == "string" &&
    isNum(req.query.id)
  ) {
    const uid = parseInt(req.query.id);
    const result = await getUser(uid);
    if (result === null) {
      return res.status(404).json({});
    }
    result.email = "PRIVATE";
    return res.json(result);
  } else {
    return res.status(404).json({});
  }
}
