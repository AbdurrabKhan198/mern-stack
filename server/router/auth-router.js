const express = require('express');

const router = express.Router();

// router.get('/', (req, res) =>{
//     res.status(200).send('Hello, World! using router');
// });

// above and below are same but options to use get 

router.route("/").get((req, res) => {

    res.status(200).send('Hello, World! using router');
});

router.get('/register', (req, res) => {
    res.status(200).send("Welcome to register page")
});

module.exports = router;