const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",  // ✅ Allow frontend requests
        methods: ["GET", "POST"],
        credentials: true, // ✅ Allow credentials (cookies, authentication)
    },
});

// Store user socket mappings
const userSocketMap = {};

// Function to get receiver's socket ID
const getRecieverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    const userId = socket.handshake.query.userId;
    if (userId && userId !== "undefined") {
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id);
        if (userId) {
            delete userSocketMap[userId];
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

// Export using CommonJS
module.exports = { app, io, server, getRecieverSocketId };