import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Name || mongoose.model("Name", nameSchema);
