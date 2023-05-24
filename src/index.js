import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './login/Login';
import Chat from './chat/Chat';
import Register from './register/Register';



const App = () => {
  const [user, setUser] = useState([]); // Initialize user state as an empty array
  const [curuser, setcuruser] = useState({}); // initial value is an empty object
  const [token,settoken] = useState();
  const [init, setinit] = useState(0);


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login setcuruser={setcuruser} user={user} setinit={setinit} settoken={settoken}/>} />
        <Route path="/Register" element={<Register setUser={setUser} user={user} init={init}/>} />
        <Route path="/Chat" element={<Chat curuser ={curuser} setcuruser={setcuruser} user={user} init={init} token={token}/>} />

      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
