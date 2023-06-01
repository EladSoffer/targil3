const getd = require('../models/UserPassName');

const getDetailes = async( username) =>{
    const user = await getd.findOne({username})
    const userWithDetails={
        username : user.username,
        displayName : user.displayName,
        profilePic : user.profilePic
    };
    return userWithDetails;
};

module.exports = {getDetailes};