import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    publishedDate: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
