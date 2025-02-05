import dbConnect from "@/lib/db";
import mongoose from "mongoose";

await dbConnect();

const skillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
  },
  skillLinks: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema);
export default Skill;
