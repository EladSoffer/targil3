import React, { useState,useEffect } from 'react';


function Message({curuser, setcuruser, curContact, setuser, token, messages, setmessages, mesFlag, setmesFlag, socket}) {


  function sendMessage() {
    //const tempCon = curuser.contacts.find(usera => usera.name === curContact.name);
    const mesa = document.getElementById('message');
    const mes = mesa.value.trim(); // trim any leading/trailing whitespace
    if (!mes) return; // if message is empty, do nothing
    const date = new Date();
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageWithTime = {
      content: mes,
      time: time
    };
    

    async function friends() {
      const data = {
        "msg": mes
      }
      const res = await fetch(`http://localhost:5000/api/Chats/${curContact.id}/Messages`, {
        'method': 'post', // send a post request
        'headers': {
          'authorization': `Bearer ${token.token}`, // Use backticks for string interpolation
          'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
        },
        'body': JSON.stringify(data) // The actual data (username/password)
      })
      if (res.status === 500) {
        // setError('Contact ID does not match any user.');
      } else {
        var temp = mesFlag;
        temp = temp + 1;
        setmesFlag(temp);
        socket.emit('sendMessage', curContact.id,mes);
        // const temp = [...messages];
        // temp.push(messageWithTime);
        // setmessages(temp);
      }
    }
    friends();
    // Find the contact by name
    mesa.value = ""; 
  }
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      sendMessage();
    }
  }
    return(
      <>
      <input
      type="text"
      id='message'
      className="form-control"
      placeholder="Type a message"
      aria-label="Type a message"
      aria-describedby="button-send"
      onKeyDown={handleKeyDown}
    />
    <div className="input-group-append">
        <button className="btn btn-success" type="button" id="button-send" onClick={sendMessage}>
         Send
        </button>
      </div>
</>
  );
}
  
export default Message;