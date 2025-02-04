import mongoose from "mongoose";

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

export default mongoose.models.Skill || mongoose.model("Skill", skillSchema);
