import News from "../models/News.js";

// Get all news
export const getAllNews = async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: "Error fetching news", error });
    }
};

// Add news
export const addNews = async (req, res) => {
    try {
        const { title, content, category } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        const newsArticle = new News({ title, content, category });
        const savedNews = await newsArticle.save();

        res.status(201).json(savedNews);
    } catch (error) {
        res.status(500).json({ message: "Error adding news", error });
    }
};

// Delete news
export const deleteNews = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: "News not found" });

        await news.deleteOne();
        res.status(200).json({ message: "News deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting news", error });
    }
};
