import mongoose, { Schema, Document } from "mongoose";

interface ISubTitle extends Document {
  name: string;
}

const subTitleSchema: Schema = new Schema({
  name: { type: String, required: true },
});

const subTitle =
  mongoose.models.SubTitle ||
  mongoose.model<ISubTitle>("SubTitle", subTitleSchema);

export default subTitle;
