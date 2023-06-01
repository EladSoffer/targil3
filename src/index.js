import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client instead of react-dom

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';

import Login from './login/Login';
import Chat from './chat/Chat';
import Register from './register/Register';

const socket = io('http://localhost:5000'); // Replace with your server URL

const App = () => {
  const [user, setUser] = useState([]);
  const [curuser, setcuruser] = useState({});
  const [token, settoken] = useState();
  const [init, setinit] = useState(0);

  useEffect(() => {

    console.log("dd");
    // Connect to the socket when the component mounts
    socket.connect();

    // Connect to the socket when the component mounts
    socket.connect();
    socket.on('connect', () => {
      console.log("MY SOCKET: " + socket.id);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setcuruser={setcuruser}
              user={user}
              setinit={setinit}
              settoken={settoken}
              socket={socket}
            />
          }
        />
        <Route
          path="/Register"
          element={<Register setUser={setUser} user={user} init={init} />}
        />
        <Route
          path="/Chat"
          element={
            <Chat
              curuser={curuser}
              setcuruser={setcuruser}
              user={user}
              init={init}
              token={token}
              socket={socket}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const root = document.getElementById('root');

createRoot(root).render(<App />); // Use createRoot from react-dom/client

