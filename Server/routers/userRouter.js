const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//we will be requiring in our controllers here so data is processed
    // will have middleware
// router.get('/', '' , (req, res, () => {
//     return res.status(200).json(res.locals);
// }));

// to create a new user go to this route
router.post('/new', userController.createUser, (req, res) => {
    // userController returns the   
    return res.status(200).json(res.locals.newUser);
});

router.get('/:username', userController.findUser, (req, res) => {
    return res.status(200).json(res.locals.user);
});

module.exports = router;