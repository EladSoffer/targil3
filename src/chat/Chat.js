import './Chat.css';
import ContactArr from '../contactarr/ContactArr';

import Modal from '../modal/Modal';
import Logoutbtn from '../logoutbtn/Logoutbtn';
import Send from '../send/Send';
import React, { useEffect, useState } from 'react';
import MesArr from '../mesarr/MesArr';


//YUVAL

function Chat({ curuser, setcuruser, user, token }) {
  const [contacts, setcontacts] = useState([]);
  const [messages, setmessages] = useState([]);
  const [mesFlag, setmesFlag] = useState(1);
  const getCuruser = async () => {
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


  useEffect(() => {
    const fetchData = async () => {
      await getCuruser();
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [curContact, setcurContact] = useState({});

  const friendChat = async () => {
    const res = await fetch('http://localhost:5000/api/Chats', {
      'method': 'Get', // send a post request
      'headers': {
        authorization: `Bearer ${token.token}`, // Use backticks for string interpolation
        'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
      },

    })
    const data = await res.json(); // Parse the response JSON
    setcontacts(data);

  }

  useEffect(() => {
    friendChat()
    const fetchdata = async () => {
      await friendChat();
    };
    fetchdata();
  }, [])


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
                <img src={curuser.profilePic} id='userpic' alt='' />
                <span className="ml-2">{curuser.displayName}</span>
                <span className="ml-auto">

                  <Modal contacts={contacts} setcontacts={setcontacts} setcurContact={setcurContact} token={token} />

                </span>
              </div>

              <ContactArr contacts={contacts} setcurContact={setcurContact} curContact={curContact} user={user} />


            </div>
          </div>
          <div className="col-md-7 padd ">
            <div

              id="chatInfo"
              className="list-group-item list-group-item-action d-flex align-items-center me"
            >


              {curContact && curContact.user && curContact.user.profilePic && <img src={curContact.user.profilePic} className='curcontact' alt='' />}

              {curContact && curContact.user && curContact.user.profilePic && <span className="ml-2">{curContact.user.username}</span>}
            </div>

            <MesArr curuser={curuser} curContact={curContact} contacts={contacts} messages={messages} setmessages={setmessages} token={token} mesFlag={mesFlag}/>
            <div className="input-group mt-auto ">


              <Send curuser={curuser} setcuruser={setcuruser} curContact={curContact} token={token} messages={messages} setmessages={setmessages} mesFlag={mesFlag} setmesFlag={setmesFlag}/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;