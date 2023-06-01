
const { isLoggedIn } = require('../controllers/login');
const chatsControllers = require('../controllers/chats');
const express = require('express');
var router = express.Router();

router.get('/',isLoggedIn,chatsControllers.getChats);

router.post('/',isLoggedIn,chatsControllers.postChats);

module.exports = router;

