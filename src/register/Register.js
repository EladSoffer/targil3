import './Register.css';
import Inputfield from '../inputfield/Inputfiled';
import Subbutton from '../subbutton/Subbuttun';
import Imageinput from '../imageinput/Imageinput';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Register({setUser,user}) {

  const [image, setimage] = useState({})

  return (
    <>
    <title>Friends Registration</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" type="text/css" href="register.css" />
    <h1 style={{ fontSize: 35 }} className="name">
      Friends
    </h1>
    <link rel="icon" type="image/jpg" href="message.jpg" />
    <div className="container">
      <div className="row rowReg">
        <div className="col-md-12">
          <div className="card">
            <h2>Register</h2>
            <form>
            <Inputfield itype = "text" id="name" iplaceholder="Enter name" ilabel = "Username" iicon = "glyphicon glyphicon-user" />
            <Inputfield itype = "password" id="password" iplaceholder="Enter password" ilabel = "password" iicon = "glyphicon glyphicon-lock" />
            <Inputfield itype = "password" id="confirm-password" iplaceholder="Confirm password" ilabel = "confirm-password" iicon = "glyphicon glyphicon-lock" />
            <Inputfield itype = "text" id="display-name" iplaceholder="Display name" ilabel = "Display name" iicon = "glyphicon glyphicon-user" />
            <Imageinput setimage={setimage}/>
              

              <div className="row">
                <div className="ol-6 mx-auto text-center">
                  <img                 
                    id="friendspic"                  
                    className="img-responsive center-block"
                  />
                </div>
              </div>
              <br />
            
              <Subbutton itype = "Register" setUser={setUser} user={user} image={image}/>
              <center>
                <p>
                  Already registered?
                  <Link to="/">
                     <span>Click here</span> </Link>
                     to login
                </p>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default Register;