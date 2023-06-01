const registerService = require('../services/register');

const UserPassName = require('../models/UserPassName')

const craeteUser = async(req, res) => {

// Check if the user already exists
const username = req.body.username;

const existingUser = await UserPassName.findOne({ username: username });
if (existingUser) {

  // User with the same username already exists
  return res.status(409).json({ error: 'Username already taken. Please choose a different username.' });
}
const createdUser = await registerService.createUser(req.body);
return res.status(200).json(createdUser);
};

module.exports = {craeteUser};


