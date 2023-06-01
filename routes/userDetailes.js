const { isLoggedIn } = require('../controllers/login');

const userDetailesController = require('../controllers/userDetailes');
const express = require('express');
var router = express.Router();

router.get('/',isLoggedIn,userDetailesController.getDetailes);

module.exports = router;