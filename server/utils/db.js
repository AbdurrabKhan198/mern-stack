const mongoose = require('mongoose');

// const URI = 'mongodb://localhost:27017/mern_admin'; // Replace with your MongoDB connection string

const URI = process.env.MONGODB_URI; // Use the environment variable for the MongoDB URI


const connectDb = async () => {
    try {
        await mongoose.connect(URI); 
            
        console.log('MongoDB connected successfully');
        
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(0); // Exit the process with failure
    }
};

module.exports = connectDb; // Export the connectDb function for use in other files