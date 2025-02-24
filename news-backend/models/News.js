import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("News", NewsSchema);
