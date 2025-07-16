require('dotenv').config(); // This line loads environment variables from a .env file into process.env, allowing you to access them in your application. It's commonly used to store sensitive information like database connection strings, API keys, and other configuration settings.

const express = require('express');

app = express();
const router = require("./router/auth-router")
const connectDb = require('./utils/db');

// Connect to the database
connectDb(); // This function connects to the MongoDB database using Mongoose. It should be called before starting the server to ensure the database connection is established.

// hum chahte hain hamarea application itna powerful ho itna compatible ho agr koi json file ka len den krna chahe to koi bhi pabandi na ho uske lie hum kuch krenge jise middle ware khte hain

app.use(express.json()); // this line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request body. This middleware is responsible for parsing JSON data from requests, and it shoudl be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.


// mount the Router: To use the router in your main express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router)

// all the get files code has been moved into router and we are using by exports

connectDb().then(() => {

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

});