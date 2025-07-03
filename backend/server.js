const express = require('express');

const port = 3000;
const authRoutes = require('./routes/auth.routes');
const messageRoutes = require('./routes/message.routes');
const userRoutes = require('./routes/user.routes');
const dbConfig = require('./db/dbConfig');
const cookieParser = require('cookie-parser');

import path from "path";

const { app, server } = require('./socket/socket.js');

const _dirname = path.resolve();


// Middleware should come BEFORE routes
app.use(express.json()); // to parse the incoming requests with JSON payloads
app.use(cookieParser());  // to parse the incoming requests with cookies


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname, "/frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
    });
}

// Start server
server.listen(port, () => {
  dbConfig();
  console.log(`Server is running on port ${port}`);
});