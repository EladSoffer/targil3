import React, { useState } from 'react';


import { useNavigate } from "react-router-dom";

function Subbutton(props) {
  const [error, setError] = useState(null); // state to store error message
  const navigate = useNavigate();

  function handleClient(event) {

    event.preventDefault();

    const form = event.target.form;
    if (form.checkValidity()) { // Check if all required inputs are filled

      const passwordRegex = /^(?=.*[A-Z]).{1,}$/; // Regular expression to match a password with at least one capital letter and a length of at least 8 characters
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirm-password');
      const displayNameInput = document.getElementById('display-name');
      const name = document.getElementById('name');
      const logname = document.getElementById('logname');
      const logpass = document.getElementById('logpassword');


      if (props.itype === 'Register') {

        if (!passwordRegex.test(passwordInput.value)) { // Check if the password meets the criteria
          setError('Password should be at least 8 characters long and contain at least one uppercase letter.');
          event.preventDefault();
        } else if (passwordInput.value !== confirmPasswordInput.value) {
          setError('Password and confirm password do not match.');
          event.preventDefault();
        } else {
          setError(null); // clear the error
          setError('This username allready exist');
            //send the server new user
            async function regist() {
              const data = {
                "username": name.value,
                "password": passwordInput.value,
                "displayName": displayNameInput.value,
                "profilePic": props.image
                //contacts: []
              }
              
              const res = await fetch('http://localhost:5000/api/Users', {
                'method': 'post', // send a post request
                'headers': {
                  'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
                },
                'body': JSON.stringify(data) // The actual data (username/password)
              })
                 if(res.status === 409){
                      setError('This username allready exist');
                 } else{

                  
                  navigate("/");
                 }
            }
            regist();

        }
      } else {
        
        setError(null); // clear the error
        // continue with form submission
        async function logg(){
        const login= {
          "username": logname.value,
          "password": logpass.value
        }

        const res = await fetch('http://localhost:5000/api/Tokens', {
                'method': 'post', // send a post request
                'headers': {
                  'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
                },
                'body': JSON.stringify(login) // The actual data (username/password)
              })
              if(res.status === 404){
                setError('Incorrect username or password');
              } else{
                const token = await res.text();

                props.settoken({name:logname.value, token:token});
                navigate("/Chat");
              }
        }
        logg();
      }
    } else {
      setError('Please fill all the fields');
      event.preventDefault();
    }
  }



  return (
    <div className="row">
      <div className="col-6 mx-auto text-center">

          <button type="submit" className="btn btn-primary btn-block" onClick={handleClient} >
            {props.itype};
          </button>

        {error && <div className="text-danger">{error}</div>} {/* show error message */}

      </div>
    </div>
  );
}

export default Subbutton;