const express = require('express');

app = express();
const router = require("./router/auth-router")

// hum chahte hain hamarea application itna powerful ho itna compatible ho agr koi json file ka len den krna chahe to koi bhi pabandi na ho uske lie hum kuch krenge jise middle ware khte hain

app.use(express.json()); // this line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request body. This middleware is responsible for parsing JSON data from requests, and it shoudl be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.

// mount the Router: To use the router in your main express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router)

// all the get files code has been moved into router and we are using by exports

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});