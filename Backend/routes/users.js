var express = require('express');

var router = express.Router();
const {
  getAllUsers,
  registerController
} = require('../controllers/user.js');

/* GET users listing. */
router.get('/users', getAllUsers);
router.post('/register', registerController);

module.exports = router;
