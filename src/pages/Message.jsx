import './Message.css';
// import { useState } from 'react';

function Message({users}) {
    // const [first, setfirst] = useState(users)
    console.log(users);

  return (
    <div className='messageContainer' key={users.length}>
     {users.map((val,i)=>{
        return (
        <div key={i}>
        {val.position === 'left'?<div className="leftMessageContainer">
        <span className="leftMessage">
        {val.name}: {val.message}
        </span>
        </div>:val.position === 'right'?<div className="rightMessageContainer">
        <span className="rightMessage">
        {val.message}
        </span>
      </div>:''}
        </div>)
     })}
      </div>
  )
}
export default Message;