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

NewsSchema.index({ category: 1 }); // Index for faster queries

const News = mongoose.model("News", NewsSchema);
export default News;
