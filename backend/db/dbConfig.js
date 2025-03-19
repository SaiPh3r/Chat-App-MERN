const mongoose = require('mongoose');
const dbConfig = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected')
        
    } catch (error) {
        console.log("error connecting to database", error)
        
    }
}

module.exports = dbConfig;