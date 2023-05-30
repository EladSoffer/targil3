import Chatslist from '../chatslist/Chatslist';
import React, { useRef, useEffect } from 'react';



function contactArr({ contacts, setcurContact,curContact, user }) { 


  if (!contacts || contacts.length === 0) {
    
    return null;
  }
  
  console.log(contacts);
  const contactComponents = contacts.map((contact, index) => (

    <Chatslist
      key={index}
      iname={contact.user.username} 
      itime="10/11/2023 12:33" 
      iicon="user-icon-male"
      contact={contact}
      //setcuruser={setcurser}
      setcurContact={setcurContact}
      curContact={curContact}
      user={user}
      contacts={contacts}
    />
    
  ));

  return(

    <div className="contacts-container">
        {contactComponents}
    </div>
   
  );
}

export default contactArr;