const { isLoggedIn } = require('../controllers/login');
const oneChatControllers = require('../controllers/oneChat');
const express = require('express');
var router = express.Router();


router.get('/:id',isLoggedIn,oneChatControllers.getOneChat);


router.delete('/:id',isLoggedIn,oneChatControllers.deleteChat);


module.exports = router;