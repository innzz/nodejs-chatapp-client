import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

function Login({name,setName,socket}) {
    const handleChange = (e)=>{
        setName(e.target.value);
    }

    const handleSend = ()=>{
      //Ask new user his/her name and let the server know
        socket.emit('new-user-joined',name)
    }
  return (
    <div className='loginOuterContainer'>
      <div className="loginInnerContainer">
      <h3>Enter your name to Join the room.</h3>
      <div className="loginInputContainer">
      <input value={name} onChange={handleChange}/>
      {name.length !== 0 ? <Link to={'/home'} onClick={handleSend}>
        <button >Join</button>
      </Link> : <Link onClick={handleSend}>
        <button >Type your name</button>
      </Link>}
      </div>
      </div>
    </div>
  )
}

export default Login