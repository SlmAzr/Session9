const router = require('express').Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');
const isAuth = require('../middlewares/isAuth');

router.get('/me', isAuth, userController.getUser);


module.exports = router;