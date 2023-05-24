
import './Login.css';
import Inputfield from '../inputfield/Inputfiled';
import Subbutton from '../subbutton/Subbuttun';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';


function Login({setcuruser, user, settoken}) {

  
  return (
<>
{/* 
  //const fields = [{type: 'ddd', placeholder: 'vv'}]; */}


  <link href="loginFrame.css" rel="stylesheet" />
  <link href="background.css" rel="stylesheet" />
  <title>Friends</title>
  <link rel="icon" type="image/jpg" href="message.jpg" />
  <center>
    <h1 style={{ fontSize: 60 }}>Friends</h1>
  </center>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  
  <div className="container">
    <div className="row rowLog">
      <div className="col-md-12">
        <div className="cardLog">
          <h2>Login</h2>
          <form>

            <Inputfield itype = "text" id="logname" iplaceholder="Enter name" ilabel = "Username" iicon = "glyphicon glyphicon-user" />
            <Inputfield itype = "password" id="logpassword" iplaceholder="Enter password" ilabel = "Password" iicon = "glyphicon glyphicon-lock" />
            <br/>
            <Subbutton itype = "Login" setcuruser={setcuruser} user={user} settoken={settoken}/>
            <center>
              <p>
                Not registered?  <Link to="/Register"><span>Click here</span></Link> to
                register
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

export default Login;
