const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth.routes');
const dbConfig = require('./db/dbConfig');

// Middleware should come BEFORE routes
app.use(express.json()); // to parse the incoming requests with JSON payloads

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/auth", authRoutes);

// Start server
app.listen(port, () => {
  dbConfig();
  console.log(`Server is running on port ${port}`);
});