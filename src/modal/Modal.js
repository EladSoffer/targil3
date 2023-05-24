
import Profile from '../images/profile.png';
import React, { useState } from 'react';

function Modal({ contacts, setcontacts, setcurContact, token }) {
  const [error, setError] = useState(null);
  function handleAddClick(event) {

    const inputEl = document.getElementById('newname');
    const inputValue = inputEl.value;

    async function friends() {
      const data = {
        "username": inputValue
      }
      const res = await fetch('http://localhost:5000/api/Chats', {
        'method': 'post', // send a post request
        'headers': {
          'authorization': `Bearer ${token.token}`, // Use backticks for string interpolation
          'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
        },
        'body': JSON.stringify(data) // The actual data (username/password)
      })
      if (res.status === 400) {
        setError('Contact ID does not match any user.');
      } else {
        console.log("ffff");
        const temp = [...contacts];
        const newContact = await res.json(); // Call res.json() to parse the response
        temp.push(newContact);
        setcontacts(temp);
        setcurContact(newContact);
      }
    }
    friends();
    console.log("AFTERffff");
    document.getElementById('newname').value = '';
    setError(null);
    document.getElementById('exampleModal').classList.remove('show');
    document.body.classList.remove('modal-open');
    document.querySelector('.modal-backdrop').remove();
    // const tempCon = contacts.user.find(usera => usera.username === inputValue);
    // const finaluser = {
    //   name: tempCon.user.username,
    //   picture: tempCon.user.profilePic
    // };
    // setcurContact(finaluser);
  }





  return (
    <>
      <button
        type="button"
        className="btn btn-link p-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          src={Profile}
          alt="prof"
          width="15px"
          className="icon"
        />
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new contact
              </h5>

            </div>
            <div className="modal-body">
              <center>
                <input
                  type="text"
                  id="newname"
                  name="name"
                  placeholder="Contact ID"
                />
                {error && <div className="text-danger">{error}</div>}
              </center>
            </div>
            <div className="modal-footer">
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
              <div className="col-md-6 text-right">
                <button type="button" className="btn btn-success" onClick={handleAddClick}>
                  Add
                </button>
              </div>
              <br></br>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Modal;
