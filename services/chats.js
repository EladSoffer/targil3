const Chat = require('../models/Chat');
const Check = require('../models/UserPassName');
const User = require('../models/User');


const getChats = async (username) => {
  try {
    const chats = await Chat.find({ users: { $elemMatch: { username: username } } });
    const allChats = [];
    chats.forEach((chat) => {
        const otherUser = chat.users.find((user) => user.username !== username);
        let lastMes = null;
        if(chat.messages.length != 0){
             lastMes = chat.messages[chat.messages.length - 1];
        } 
        const chatData = {
            id: chat._id,
            user: otherUser,
            lastMessage: lastMes
          };
          
          allChats.push(chatData);
    });
    return allChats;
  } catch (error) {
    throw new Error('Failed to get chats in mongodb');
  }

};
const postChats = async (username, newUser) => {
  const userCount = await Chat.countDocuments();
  const newChatContact = await Check.findOne({ username: newUser });
  

  if (newChatContact === null) {
    return -1;
  }

  const me = await Check.findOne({ username: username });
  const me2 = {
    username: me.username,
    displayName: me.displayName,
    profilePic: me.profilePic
  };

  const newChatContact2 = {
    username: newChatContact.username,
    displayName: newChatContact.displayName,
    profilePic: newChatContact.profilePic
  };

  const msg = [];
  const users = [newChatContact2, me2];


  const value = new Chat({users: users, messages: msg });
  try{
    await value.save();
  }catch(err){
  }
  const chatId = value._id.toString();
  

  return { id: chatId, user: newChatContact2 };
};




module.exports = { getChats, postChats };