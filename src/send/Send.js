import React, { useState,useEffect } from 'react';


function Message({curuser, setcuruser, curContact, setuser, token}) {


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
    
    

    
    const userMes = {...curuser};

    setcuruser(userMes);
    // Find the contact by name

    if (!(!curuser || !curuser.contacts || curuser.contacts.length === 0)) { 
    const contact = userMes.contacts.find(c => c.name === curContact.name);
    if (contact) {      
        contact.messages = contact.messages ? [...contact.messages, messageWithTime] : [messageWithTime];
      }
    }
    //userMes.contactsmessages 
    setcuruser(userMes);
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