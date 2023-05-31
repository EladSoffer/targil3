import Message from "../message/Message";
import React, { useRef, useEffect } from 'react';

function MesArr({ curuser, curContact, contacts, messages, setmessages, token, mesFlag}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!curuser || !curContact || !contacts || contacts.length === 0 || curContact.name === '' || !token) {
      return;
    }

    const getChatsId = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/Chats/${curContact.id}/Messages`, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${token.token}`,
            'Content-Type': 'application/json',
          },
        });
        if (res.status === 200) {
          
          const temp = await res.json();
          console.log(temp);
          setmessages(temp);
        }
      } catch (error) {
        console.error('Error fetching chat messages:', error);
      }
    };

    getChatsId();
  }, [token, curContact, mesFlag]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!curuser || !curuser.name || !curContact || curContact.name === '') {
    return null;
  }

  
  const reversedMessages = [...messages].reverse();
  const messageComponents = reversedMessages.map((message, index) => (
    <Message
      key={index}
      side={`message ${message.sender.username === curuser.name ? 'user-ms ml-84' : 'friend-ms ml-auto'}`}
      content={message.content}
      time={message.created}
      color={message.sender.username === curuser.name ? 'rgba(26, 6, 241, 0.575)' : 'rgba(26, 241, 6, 0.668)'}
    />
  ));

  return (
    <div className="message-container" ref={containerRef}>
      <div className="flex-row justify-content-start mb-4 mr-16">
        <time dateTime="YYYY-MM-DDTHH:MM:SS" id="chatDate" className="">
          10/11/2023
        </time>
      </div>
      {messageComponents}
    </div>
  );
}

export default MesArr;
