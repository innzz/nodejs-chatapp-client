import { IonButton, IonHeader, IonImg, IonPage} from '@ionic/react';
import { useEffect, useState } from 'react';
import './Home.css';
// import socketIOClient from "socket.io-client";
// // import Message from './Message';

// const socket = socketIOClient('http://localhost:5000', { transports : ['websocket'] });

const Home = ({name,socket}) => {
  const [chat, setChat] = useState([{name:name,position: 'right', message: 'You joined the chat'}]);
  const [message, setMessage] = useState('');

  // console.log(`${name}You joined the chat`);
  useEffect(() => {

    //If a new user joins, recieve his/her name from the server
    socket.on('user-joined',(name)=>{
      // console.log(name,'joined the chat');
      setChat([...chat,{name:name,position: 'left', message: 'joined the chat'}]);
    })
  
    //if server sends a message, recieve it
    socket.on('receieve',data=>{
      // console.log(name,'joined the chat');
      setChat([...chat,{name:data.name,position: 'left', message: data.message}]);
    })
    
    //If a user leaves a chat, inform it to other chat connected to server
    socket.on('leave',data=>{
      // console.log(name,'joined the chat');
      setChat([...chat,{name:data,position: 'left', message: 'left the chat'}]);
    })
    
  }, [chat])
  



    // console.log(chat)

    const handleMessage = (e)=>{
      setMessage(e.target.value);
      // console.log('event fired')
    }

    const sendMessage = (e)=>{
      e.preventDefault();
      // console.log(message)
      setChat([...chat,{name:name,position: 'right', message: message}]);
      socket.emit('send',message);
      setMessage('')
    }


    const renderChat = ()=>{
      return chat.map((val,i)=>{
        return (
        <div key={i}>
          {val.position === 'left'?<div className="leftMessageContainer">
        <span className="leftMessage">
        {val.name}: {val.message}
        </span>
        </div>:
        <div  className="rightMessageContainer">
        <span className="rightMessage">
        {val.name}: {val.message}
        </span>
        </div>}
        </div>
        )
      })
    }
  
  return (
    <IonPage className='homeContainer'>
      <IonHeader className='homeHeader'>
        <IonImg src='/logo.png' className='homeLogo' />
        <span className='homeTitle'>BroChat</span>
      </IonHeader>
      {/* <Message chat={chatArray} key={chat} /> */}
      {/* {/* {chatArray !== undefined ?  */}
      <div className='messageContainer' >
        {renderChat()}
      {/* {chat.map((val,i)=>{
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
     })} */}
      </div>
      {/* {chat} */}
      <div className="homeSendContainer">
        <form action="#" onSubmit={sendMessage} className="homeSendContainerForm">
          <input value={message} onChange={handleMessage} className='homeSendInput'/>
          <IonButton className='homeSendInputBtn' type='submit'>
            SEND
          </IonButton>
        </form>
      </div>
    </IonPage>
  );
};


export default Home;
