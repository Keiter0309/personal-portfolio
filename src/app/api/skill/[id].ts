import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import Skill from "@/models/skill";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { id } = req.query;
  console.log(id);

  if (!id || typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Skill ID" });
  }

  try {
    const skillById = await Skill.findById(new mongoose.Types.ObjectId(id));

    if (!skillById) {
      return res.status(404).json({ error: "Skill Not Found" });
    }

    return res.status(200).json(skillById);
  } catch (error) {
    console.error("Error fetching skill:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
