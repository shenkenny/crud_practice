//we need the database
const User = require('../models/userModel');

//we will put methods on this object and process data
const userController = {};

//create user - include their favorite flavor
userController.createUser = async (req, res, next) =>  {
    try {
        //ping the mongoose model and add a user
        //data comes in from req object
        const newUser = await User.create(req.body); // TODO - make sure we are sending the data from the front end
        console.log("new User - ", newUser);
        res.locals.newUser = newUser;
        return next()
    } catch (err) {
        console.log('err in create user: ', err);
        return next(err);
    };
}

//make sure that the rest of the software can read this
module.exports = userController;
