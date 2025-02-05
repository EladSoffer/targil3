import './Chat.css';
import ContactArr from '../contactarr/ContactArr';

import Modal from '../modal/Modal';
import Logoutbtn from '../logoutbtn/Logoutbtn';
import Send from '../send/Send';
import React, { useEffect, useState } from 'react';
import MesArr from '../mesarr/MesArr';


function Chat({ curuser, setcuruser, user, token, socket }) {
  const [contacts, setcontacts] = useState([]);
  const [messages, setmessages] = useState([]);
  const [mesFlag, setmesFlag] = useState(1);


  useEffect(() => {
    socket.on('MessageSent', (chatId) => {
      const hasChat = contacts.some((contact) => contact.id === chatId);
    
    if (hasChat) {
      var temp = mesFlag;
      temp = temp + 1;
      setmesFlag(temp);
    }
    });

    return () => {
      socket.off('MessageSent');
    };
  }, [socket, contacts]);


  useEffect(() =>  {
       // Listen for the delete event from the server
      socket.on('chatDeleted', (chatId) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== chatId)
        setcontacts(updatedContacts);
        if(curContact.id === chatId){
          setcurContact(null);
        }
 });

 return () => {
  socket.off('chatDeleted');
 } ;
}, [socket, contacts]);

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
      'method': 'Get', // send a get request
      'headers': {
        authorization: `Bearer ${token.token}`, // Use backticks for string interpolation
        'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
      },
    })
    const data = await res.json(); // Parse the response JSON
    console.log(data);
    setcontacts(data);

  }

  useEffect(() => {
    friendChat()
    const fetchdata = async () => {
      await friendChat();
    };
    fetchdata();
  }, [mesFlag])



  const deleteContact = async () => {
    const res = await fetch(`http://localhost:5000/api/Chats/${curContact.id}`, {
      'method': 'delete', // send a post request
      'headers': {
        'authorization': `Bearer ${token.token}`, // Use backticks for string interpolation
        'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
      },
    })
    if (res.status === 400) {
    } else {
      var temp = mesFlag;
      temp = temp + 1;
      setmesFlag(temp);
      setcurContact(null);
      socket.emit('deleteChat', curContact.id);
    }
  }



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

                  <Modal curuser={curuser} contacts={contacts} setcontacts={setcontacts} setcurContact={setcurContact} token={token} socket={socket} mesFlag={mesFlag} setmesFlag={setmesFlag}/>

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
              <div className="ml-auto">
                {curContact && curContact.user && curContact.user.profilePic && (

                  <button className="btn btn-danger btn-sm" onClick={deleteContact}>Delete</button>

                )}
              </div>
            </div>

            <MesArr curuser={curuser} curContact={curContact} contacts={contacts} messages={messages} setmessages={setmessages} token={token} mesFlag={mesFlag} />
            <div className="input-group mt-auto ">


              <Send curuser={curuser} setcuruser={setcuruser} curContact={curContact} token={token} messages={messages} setmessages={setmessages} mesFlag={mesFlag} setmesFlag={setmesFlag} socket={socket} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;