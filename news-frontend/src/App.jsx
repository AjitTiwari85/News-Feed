import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setNews } from "./redux/newsSlice.js";
import { useSocket } from "./hooks/useSocket.js";
import NewsCard from "./components/NewsCard.jsx";
import NewsForm from "./components/NewsForm.jsx";
// import "./App.css";
import './index.css'; // Adjust the path if necessary


const App = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.newsList);
  const { socket } = useSocket();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        dispatch(setNews(response.data));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">📰 Real-Time News Feed</h1>
      
      <NewsForm />

      <div className="w-full max-w-3xl mt-4 space-y-4">
        {newsList.length === 0 ? (
          <p className="text-center text-gray-500">No news available</p>
        ) : (
          newsList.map((news) => <NewsCard key={news._id} news={news} />)
        )}
      </div>
    </div>
  );
};

export default App;
