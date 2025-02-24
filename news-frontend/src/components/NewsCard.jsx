const NewsCard = ({ news }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{news.title}</h2>
      <p>{news.content}</p>
      <span className="text-sm text-gray-500">{news.category}</span>
    </div>
  );
};

export default NewsCard;
