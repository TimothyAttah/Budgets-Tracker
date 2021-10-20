const router = require('express').Router();
const authController = require('../controllers/authController');
const userAuth = require('../middlewares/auth');

router.post('/signup', authController.signUp);

router.post('/signin', authController.signIn);

router.get('/', userAuth,  authController.getUsers);

module.exports = router;
