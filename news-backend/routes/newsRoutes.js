import express from "express";
import News from "../models/News.js";

const router = express.Router();

// Get all news
router.get("/", async (req, res) => {
  const news = await News.find().sort({ createdAt: -1 });
  res.json(news);
});

// Get trending news
router.get("/trending", async (req, res) => {
  const trendingNews = await News.aggregate([
    { $sort: { views: -1, likes: -1 } },
    { $limit: 5 },
  ]);
  res.json(trendingNews);
});

// Post news
router.post("/", async (req, res) => {
  const { title, content, category } = req.body;
  const newNews = new News({ title, content, category });
  await newNews.save();
  res.status(201).json(newNews);
});

export default router;
