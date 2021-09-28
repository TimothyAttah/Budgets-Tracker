const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signUp);

router.post('/signin', authController.signIn);

router.get('/', authController.getUsers);

module.exports = router;
