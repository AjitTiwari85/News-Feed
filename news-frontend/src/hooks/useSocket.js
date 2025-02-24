import { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { addNews } from "../redux/newsSlice.js";

const socket = io("http://localhost:5000");

export const useSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("newsUpdate", (newNews) => {
      dispatch(addNews(newNews));
    });

    return () => { socket.off("newsUpdate"); };
  }, [dispatch]);

  return { socket };
};
