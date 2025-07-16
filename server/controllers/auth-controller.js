// ? In an Express.js application, a "controller"  refers to a part of your code that is responsible for handling the applications's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

const User = require('../models/user-model'); // Assuming you have a User model defined in models/user.js

const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

exports.home = async (req, res) => {

    res.status(200).send('Hello, World! using router'); // now this things has been gone into controller and we are using this by exports
}


exports.register = async (req,res) => {
    try{
        console.log(req.body);
        const {username, email, phone, password} = req.body; // Assuming req.body contains the data you want to send back

        const userExist = await User.findOne({ email: email });

        if(userExist){
            return res.status(400).json({ msg: "Email already exists" });
        }
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        const userCreated = await User.create( {
            
            username,
            email,
            phone,
            password : hashedPassword} )



        res.status(200).json({ 
            msg: "User created successfully", 
            user: userCreated , 
            token: await userCreated.generateToken() , 
            userId:userCreated._id.toString()
        }); // Assuming you have a method to generate a token
    } catch(error){
        console.log(error)
    }
}

// module.exports = home;
// module.exports = register;