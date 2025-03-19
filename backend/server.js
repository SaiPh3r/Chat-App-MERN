const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth.routes');
const dbConfig = require('./db/dbConfig');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use("/api/auth",authRoutes);

app.listen(port, () => {
    dbConfig();
    console.log(`Server is running on port ${port}`);
})