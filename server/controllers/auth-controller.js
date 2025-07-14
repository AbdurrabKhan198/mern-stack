// ? In an Express.js application, a "controller"  refers to a part of your code that is responsible for handling the applications's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.


exports.home = async (req, res) => {

    res.status(200).send('Hello, World! using router'); // now this things has been gone into controller and we are using this by exports
}


exports.register = async (req,res) => {
    try{
        console.log(req.body);
        res.status(200).json({message: req.body})
    } catch(error){
        console.log(error)
    }
}

// module.exports = home;
// module.exports = register;