const express = require('express');

app = express();

app.get('/', (req, res) =>{
    res.status(200).send('Hello, World!');
});

app.get('/register', (req, res) => {
    res.status(200).send("Welcome to register page")
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});