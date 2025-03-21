const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth.routes');
const messageRoutes = require('./routes/message.routes');
const userRoutes = require('./routes/user.routes');
const dbConfig = require('./db/dbConfig');
const cookieParser = require('cookie-parser');

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

// Start server
app.listen(port, () => {
  dbConfig();
  console.log(`Server is running on port ${port}`);
});