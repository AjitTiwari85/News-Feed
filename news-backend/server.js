import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import newsRoutes from "./routes/newsRoutes.js";

dotenv.config();
connectDB();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());
app.use("/api/news", newsRoutes);

io.on("connection", (socket) => {
  console.log("🟢 Client connected");

  socket.on("newNews", (news) => {
    io.emit("newsUpdate", news);
  });

  socket.on("disconnect", () => console.log("🔴 Client disconnected"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
