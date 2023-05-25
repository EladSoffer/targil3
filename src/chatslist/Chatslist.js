import { useState,useEffect } from 'react';

function Chatslist({ iname, itime, iicon, iclass, contact, setcurContact,curContact, user, contacts }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    const temp = contacts.find(usera => usera.user.username === iname);
    setcurContact(temp);
    setIsSelected(true);
  }

  // Update isSelected state of other components
  function updateSelectedStatus() {
    if(!curContact || !curContact.user || curContact.user.length === 0 ){
      return null;
    }
    if (curContact.user.username === iname) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }

  // Call updateSelectconedStatus when curuser changes
  useEffect(() => {
    updateSelectedStatus();
  }, [curContact]);


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
        <span className='ml-auto'><time  dateTime="YYYY-MM-DDTHH:MM:SS">{contact.lastMessage.created}</time></span>
      )}

    
  </a>
  );
}

export default Chatslist;