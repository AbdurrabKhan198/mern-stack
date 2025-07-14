const express = require('express');

app = express();
const router = require("./router/auth-router")


// mount the Router: To use the router in your main express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router)

// all the get files code has been moved into router and we are using by exports

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});