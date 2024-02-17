const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketIO = require('socket.io');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: '1000mb' }));

const server = http.createServer(app);
const io = socketIO(server,{
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5000'] 
  }
});

io.on('connection', (socket) => {


  socket.on('deleteChat', (chatId) => {

    // Emit the delete event to all clients except the sender
    socket.broadcast.emit('chatDeleted', chatId);
  });

    socket.on('addChat', (friend) => {
      // Emit the delete event to all clients except the sender
      socket.broadcast.emit('addedYou', friend);
    });
   socket.on('sendMessage', (chatId, message) => {
    socket.broadcast.emit('MessageSent', chatId, message);
  });

  socket.on('disconnect', () => {


  });
});

const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/mydatabase';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {

    server.listen(5000, () => {

    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
app.use(express.static("public"));

const messages = require('./routes/message');
app.use('/api/Chats', messages);

const register = require('./routes/register');
app.use('/api/Users', register);

const login = require('./routes/login');
app.use('/api/Tokens', login);

const userDetailes = require('./routes/userDetailes');
app.use('/api/Users/:username', userDetailes);

const chats = require('./routes/chats');
app.use('/api/Chats', chats);

const chat = require('./routes/oneChat.js');
app.use('/api/Chats', chat);

app.set('view engine', 'ejs');


module.exports = { app, server, io };
