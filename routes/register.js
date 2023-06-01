const registerController = require('../controllers/register');
const express = require('express');
var router = express.Router();

router.route('/').post(registerController.craeteUser);

module.exports = router;