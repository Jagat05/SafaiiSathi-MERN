const mongoose = require('mongoose');
const URI=process.env.MONGODB_URI; // URL to the database

const connectDB = async () => {
    try {
       await mongoose.connect(URI);
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
       console.log(error.message);
        process.exit(0);
    }
}

module.exports = connectDB;