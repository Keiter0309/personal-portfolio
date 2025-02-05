import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  social: {
    linkedIn: {
      type: String,
      required: true,
    },
    gitHub: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
