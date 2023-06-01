const Message = require('../models/Message');
const Chats = require('../models/Chat');
const User = require('../models/User');
const UserPassName = require('../models/UserPassName');

const createMessage = async (content, username, chatId) => {
    try {
        const chat = await Chats.findById(chatId);
        if (!chat) {
            return 1; /// there isn't this chat
        }
        const senderWithPass = UserPassName.findOne({ username });
        // const user = new User({
        //     username: senderWithPass.username,
        //     displayName: senderWithPass.displayName,
        //     profilePic: senderWithPass.profilePic
        // });
 
        const message = new Message({ sender: {username: username}, content: content }); // Chat found, add message
        // Add the message to the chat's messages array
        chat.messages.push(message);
        // Save the updated chat
        await chat.save();
        return message;
    } catch (error) {
        throw new Error('Failed to get the chat in mongodb');
    }
};

const getMessages = async (chatId) => {
    try {
        const chat = await Chats.findById(chatId);
        const temp = chat.messages.reverse();
        if (!chat) {
            return 1; /// there isn't this chat
        } else {
            return temp;
        }
    } catch (error) {
        throw new Error('Failed to get the chat in mongodb');
    }
};


    module.exports = { createMessage, getMessages };