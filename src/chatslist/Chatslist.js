import { useState,useEffect } from 'react';

function Chatslist({ iname, itime, iicon, iclass, contact, setcurContact,curContact, user, contacts,id }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    const temp = contacts.find(usera => usera.id === id);

    setcurContact(temp);
    setIsSelected(true);
  }

  // Update isSelected state of other components
  function updateSelectedStatus() {


    if(!curContact || !curContact.user || curContact.user.length === 0 ){
      return null;
    }

    if (curContact.id === id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }

  // Call updateSelectconedStatus when curuser changes
  useEffect(() => {
    updateSelectedStatus();
  }, [curContact]);

  function isToday(timestamp) {
    const today = new Date();
    const providedDate = new Date(timestamp);
  
    return (
      today.getDate() === providedDate.getDate() &&
      today.getMonth() === providedDate.getMonth() &&
      today.getFullYear() === providedDate.getFullYear()
    );
  }


  return (
    <a
    href="#"
    className={`list-group-item list-group-item-action d-flex align-items-center contactss ${isSelected ? 'active' : ''}`}
    onClick={handleClick}
  >
    <img src={contact.user.profilePic} className='curcontact'/>
    
      <span className={`chatcontacts `}>{iname}</span>
      {contact.lastMessage && (
        <div className='lastmss'>{contact.lastMessage.content}</div>
      )}
      {contact.lastMessage && (
        <span className='ml-auto'><time className='lastMTime'  dateTime="YYYY-MM-DDTHH:MM:SS">{isToday(contact.lastMessage.created)
          ? new Date(contact.lastMessage.created).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          : new Date(contact.lastMessage.created).toLocaleDateString()}</time></span>
      )}

    
  </a>
  );
}

export default Chatslist;