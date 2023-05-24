import './Chat.css';
import ContactArr from '../contactarr/ContactArr';

import Modal from '../modal/Modal';
import Logoutbtn from '../logoutbtn/Logoutbtn';
import Send from '../send/Send';
import React, {  useEffect, useState } from 'react';
import MesArr from '../mesarr/MesArr';




function Chat({ curuser, setcuruser, user,token }) {
  const getCuruser= async()=> {
    const res = await fetch(`http://localhost:5000/api/Users/${token.name}`, {
      method: 'GET', // Use 'GET' instead of 'Get'
      headers: {
        authorization: `Bearer ${token.token}`, // Use backticks for string interpolation
        'Content-Type': 'application/json',
      },
    });
  
    if (res.status === 401) {
      // Handle the unauthorized response
    } else {
      const userData = await res.json(); // Parse the response JSON
        const displayName = userData.displayName;
        const profilePic = userData.profilePic;
        const user = {
          name: token.name,
          displayName: displayName,
          profilePic: profilePic
        };
        setcuruser(user);
       }
  }
  // getCuruser();
  console.log(curuser);
  useEffect(() => {
    const fetchData = async () => {
      await getCuruser();
    };
  
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div
            id="myInfo"
            className="list-group-item-action d-flex align-items-center me"
          >
            <img src={curuser.profilePic} id='userpic' alt=''/>
            <span className="ml-2">{curuser.displayName}</span>
            <span className="ml-auto">
            
              <Modal setcuruser={setcuruser}  user={user} curuser={curuser} setcurContact={setcurContact}/>

            </span>
          </div>
          <ContactArr curuser={curuser} setcurser={setcuruser} setcurContact={setcurContact} curContact={curContact} user={user}/>

        </div>
      </div>
      <div className="col-md-7 padd ">
        <div
          
          id="chatInfo"
          className="list-group-item list-group-item-action d-flex align-items-center me"
        >


        {curContact.picture && <img src={curContact.picture} className='curcontact' alt=''/>}

          <span className="ml-2">{curContact.name}</span>
        </div> 
          
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