const UserPass = require('../models/UserPass');
const Check = require('../models/UserPassName')
const jwt = require('jsonwebtoken');

const key = "secret"


async function login(req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;

    // Check credentials
    const user = await Check.findOne({ username });

    if (user && user.password === password) {
      // User with the provided username and password found - Generate JWT
      const data = { username: user.username };
      const token = jwt.sign(data, key);
      res.status(200).json({ token });
    } else {
      // User with the provided username and/or password not found
      res.status(404).send('Invalid username and/or password');
    }
  } catch (err) {
    // Handle any error that occurred during the query
    res.status(500).send('An error occurred');
  }
}


const isLoggedIn = (req, res, next) => {
  // If the request has an authorization header
  if (req.headers.authorization) {
    // Extract the token from that header
    const token = req.headers.authorization.split(" ")[1];
    const parsedToken = JSON.parse(token);
    const tokenValue = parsedToken.token;

    try {
      // Verify the token is valid
      const data = jwt.verify(tokenValue, key);
      // Token validation was successful. Continue to the actual function (index)
      return next()
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
  }
  else
    return res.status(403).send('Token required');
}



module.exports = {
  login,
  isLoggedIn
};
