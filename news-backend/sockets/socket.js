import { Server } from "socket.io";

export default (server) => {
  const io = new Server(server, {
    cors: { origin: process.env.CORS_ORIGIN },
  });

  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("subscribe", (category) => {
      socket.join(category);
    });

    socket.on("new-article", (news) => {
      io.to(news.category).emit("news-update", news);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};
