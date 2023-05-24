import './Chat.css';
import ContactArr from '../contactarr/ContactArr';

import Modal from '../modal/Modal';
import Logoutbtn from '../logoutbtn/Logoutbtn';
import Send from '../send/Send';
import React, {  useState } from 'react';
import MesArr from '../mesarr/MesArr';




function Chat({ curuser, setcuruser, user,token }) {
  console.log(token);
  

  const [curContact, setcurContact] = useState({
    name: '',
    picture: '',
    messages: []
  });

   // Initialize user state as an empty array
  return (
<>
  <title>Friends</title>
  <center>
    <h1 style={{ fontSize: 60 }}>Friends</h1>
  </center>
  <Logoutbtn />
  <div className="container">
    <div className="row rowChat">
      
      <div className="col-md-5 padd">
        <div className="list-group">
          <a
            
            id="myInfo"
            className="list-group-item-action d-flex align-items-center me"
          >
            <img src={curuser.picture} id='userpic' alt=''/>
            <span className="ml-2">{curuser.displayName}</span>
            <span className="ml-auto">
            
              <Modal setcuruser={setcuruser}  user={user} curuser={curuser} setcurContact={setcurContact}/>

            </span>
          </a>
          <ContactArr curuser={curuser} setcurser={setcuruser} setcurContact={setcurContact} curContact={curContact} user={user}/>

        </div>
      </div>
      <div className="col-md-7 padd ">
        <a
          
          id="chatInfo"
          className="list-group-item list-group-item-action d-flex align-items-center me"
        >


        {curContact.picture && <img src={curContact.picture} className='curcontact' alt=''/>}

          <span className="ml-2">{curContact.name}</span>
        </a> 
          
        <MesArr curuser={curuser} curContact={curContact} />
        <div className="input-group mt-auto ">


          <Send curuser={curuser} setcuruser={setcuruser} curContact={curContact} />

        </div>
      </div>
    </div>
  </div>
</>
  );
}

export default Chat;