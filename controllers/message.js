const messageService = require('../services/message');
const jwt = require('jsonwebtoken');

const key = "secret"

const createMessage = async(req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const parsedToken = JSON.parse(token);
    const tokenValue = parsedToken.token;
    const data = jwt.verify(tokenValue, key);
    const chatId = req.params.id;
    try{
    const temp = (await messageService.createMessage(req.body.msg, data.username, chatId));
    if(temp === 1){
        res.status(400).json({ error: 'Error there is no chat with this id' });
    } else{
         res.status(200).json({temp});
    }
    } catch{
        res.status(500).json({ error: 'Failed to retrieve mongodb' });
    }
};

const getMessages = async(req, res) => {
    const chatId = req.params.id;
    
    try{
        const temp = (await messageService.getMessages(chatId));
        if(temp === 1){
            res.status(400).json({ error: 'Error there is no chat with this id' });
        } else{
             res.status(200).json(temp);
        }
        } catch{
            res.status(500).json({ error: 'Failed to retrieve mongodb' });
        }
};




module.exports = {createMessage, getMessages};