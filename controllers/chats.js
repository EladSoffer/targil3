const chatsService = require('../services/chats');
const jwt = require('jsonwebtoken');

const key = "secret"

const getChats = async(req, res) => {
    
    const token = req.headers.authorization.split(" ")[1];
    const parsedToken = JSON.parse(token);
    const tokenValue = parsedToken.token;


    const data = jwt.verify(tokenValue, key);
    try{
    res.json(await chatsService.getChats(data.username));
    } catch{
        res.status(500).json({ error: 'Failed to retrieve mongodb' });
    }
};
const postChats = async(req, res) =>{
    const token = req.headers.authorization.split(" ")[1];
    const parsedToken = JSON.parse(token);
    const tokenValue = parsedToken.token;
    const data = jwt.verify(tokenValue, key);
    const newUser = req.body.username;

    try{
        const user = await chatsService.postChats(data.username, newUser);
        if (user === -1){
            res.status(400).json({ error: 'There no such contact' })
        }
        else{
            res.status(200).json(user);
        }
        } catch{
            res.status(500).json({ error: 'Failed to retrieve mongodb' });
        }
};

module.exports = {getChats,postChats};
