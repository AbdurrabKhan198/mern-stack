const express = require('express');

const router = express.Router();
const { home, register } = require("../controllers/auth-controller");
// router.get('/', (req, res) =>{
//     res.status(200).send('Hello, World! using router');
// });

// above and below are same but options to use get 


// (req, res) => {

//     res.status(200).send('Hello, World! using router'); // now this things has been gone into controller and we are using this by exports
// });
router.route("/").get(home);
// router.route('/register').get(register);
router.route('/register').post(register);



module.exports = router;