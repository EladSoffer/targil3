const { isLoggedIn } = require('../controllers/login');

const messageControllers = require('../controllers/message');
const express = require('express');
var router = express.Router();


router.post('/:id/Messages', isLoggedIn, messageControllers.createMessage);
router.get('/:id/Messages', isLoggedIn, messageControllers.getMessages);

module.exports = router;
