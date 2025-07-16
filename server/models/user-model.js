const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    email: {   
        type: String,
        required: true,
      
    },
    password: {
        type : String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false, // Default value for isAdmin is false
    },
   
}); 

// secure the password with the help of bcryptjs

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10); // Hash the password before saving
    }
    next();
});

// What is JWT?
// JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.
// JWTs are commonly used for authentication and information exchange in web applications. They allow you to securely transmit information between parties and verify the authenticity of the data.



//define the model or the collection name

const User = new mongoose.model('User', userSchema); // 'User' is the name of the collection in MongoDB

module.exports = User; // Export the User model for use in other files