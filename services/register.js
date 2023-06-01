const UserPassName = require('../models/UserPassName');


const createUser = async(a) =>{
    const user = new UserPassName({username: a.username, password: a.password, displayName: a.displayName, profilePic: a.profilePic}); ///////////////////how i get the sender???
    return await user.save();
};


module.exports = {createUser};