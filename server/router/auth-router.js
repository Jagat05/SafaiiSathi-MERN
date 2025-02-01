const express = require('express');
const router = express.Router();
// const {home , register } = require('../controller/auth-controller');

const authController = require('../controllers/auth-controller');
const validate = require("../middlewares/validate-middleware"); // Import your validate middleware
const signupSchema = require("../validators/auth-validator"); // Import your signup schema



// router.get('/', (req, res) => {
//     res.status(200).send('Hello home router..');
// });
router.route('/')
    .get(authController.home);

    router.route('/register')
  .post(validate(signupSchema), authController.register);  // Applying the validate middleware
    
    router.route('/login')
    .post(authController.login);

module.exports = router;  