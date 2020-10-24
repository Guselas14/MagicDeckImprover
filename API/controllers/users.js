const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/keys');
const User = require('../models/Users');

const usersController = {};

// Create User 
usersController.create = async (req,res) => {
    let {  userName, email, password, confirm_password } = req.body;
        // Check password
        if(password !== confirm_password) {
            return res.status(400).json({msg: "Password do not match"});
        };
        // Check for the unique email
      const mail = await User.findOne({email:email});
      if(mail) {
        return res.status(400).json({msg :"Email is already taken"});
      };
       // Register the user before validated
       let newUser = new User({
        userName,
        password,
        email,
    });
    // Hash the password with bcrypt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async(err,hash) => {
            if(err) throw err;
            newUser.password = hash;
            await newUser.save();         // Important here we save the user
            return res.status(200).json({success: true, message: "User is now registered!"});         
        });
    });
};
// Login User 
usersController.login = async (req,res) => {

    const user = await User.findOne({userName:req.body.userName});
    if(!user) {
        res.status(400).json({msg: "This UserName doesn't exist", success: false})
    }
// If there is user we are now going to compare the password
bcrypt.compare(req.body.password, user.password).then(isMatch => {
    if (isMatch) {
        // User's password is correct and we need to send the JSON Token for that user
        const payload = {
            _id: user._id,
            username: user.userName,
            email: user.email
        }
        // Here we create the TOKEN
        jwt.sign(payload, key.secret, { expiresIn: 604800}, (err, token) => {
            if (err) throw err;
            res.status(200).json({
                success: true,
                token: `Bearer ${token}`,
                user: user.userName,
                msg: "Hurry! You are now logged in."
            });
        })
    } else {
        return res.status(404).json({
            msg: "Incorrect password.",
            success: false
        });
    }
})
};

usersController.getUser = async(req,res) =>{
    const user = await User.findById(req.params.userId);
    if(!user) {
        res.status(400).json({success: false, msg: "User not found"})
    }
    res.status(200).json({success:true, user: user})
}

module.exports = usersController;