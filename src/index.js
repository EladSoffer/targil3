import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
    // Connect to the socket when the component mounts
    socket.connect();

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
ReactDOM.render(<App />, root);
