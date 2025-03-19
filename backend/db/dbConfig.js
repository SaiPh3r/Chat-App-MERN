require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

const dbConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Database connected');
    } catch (error) {
        console.error("❌ Error connecting to database:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = dbConfig;