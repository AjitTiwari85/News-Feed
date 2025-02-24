import express from "express";
import News from "../models/News.js";

const router = express.Router();

router.get("/trending", async (req, res) => {
  try {
    const trendingNews = await News.aggregate([
      { $sort: { views: -1, likes: -1 } },
      { $limit: 5 },
    ]);
    res.json(trendingNews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
