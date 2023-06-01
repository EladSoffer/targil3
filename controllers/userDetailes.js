const userDetailesService = require('../services/userDetailes');
const jwt = require('jsonwebtoken');

const key = "secret"

const getDetailes = async(req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const parsedToken = JSON.parse(token);
    const tokenValue = parsedToken.token;
    const data = jwt.verify(tokenValue, key);
    res.json(await userDetailesService.getDetailes(data.username));
};

module.exports = {getDetailes};