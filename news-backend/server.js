import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import connectDB from "./config/db.js";
import newsRoutes from "./routes/newsRoutes.js";
import setupSocket from "./sockets/socket.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
setupSocket(server);

connectDB();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use("/api/news", newsRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
