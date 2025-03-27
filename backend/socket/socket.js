const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",  // ✅ Allow requests from frontend
      methods: ["GET", "POST"],
      credentials: true, // ✅ Allow credentials (cookies, authentication)
    },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

module.exports = { app, io, server };
