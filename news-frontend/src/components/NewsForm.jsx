import { useState } from "react";
import axios from "axios";
import { useSocket } from "../hooks/useSocket.js";


const NewsForm = () => {
  const { socket } = useSocket();
  const [formData, setFormData] = useState({ title: "", content: "", category: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/news", formData);
    socket.emit("newNews", response.data);
    setFormData({ title: "", content: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <input type="text" placeholder="Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
      <textarea placeholder="Content" onChange={(e) => setFormData({ ...formData, content: e.target.value })}></textarea>
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">Post News</button>
    </form>
  );
};

export default NewsForm;
