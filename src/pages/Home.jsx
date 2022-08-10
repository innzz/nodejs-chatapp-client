import { IonButton, IonHeader, IonImg, IonInput, IonPage} from '@ionic/react';
import { useEffect } from 'react';
import './Home.css';
// import io from 'socket.io-client';
import socketIOClient from "socket.io-client";

const Home = () => {
  // const socket = io("http://localhost:5000");
  
  useEffect(() => {
    const name = prompt('Enter your name to join');
    const socket = socketIOClient('http://localhost:5000', { transports : ['websocket'] });;
    socket.emit('new-user-joined',name);
    console.log(name)
  }, [])
  
  // const socket = socketio.connect("http://localhost:5000");

  return (
    <IonPage className='homeContainer'>
      <IonHeader className='homeHeader'>
        <IonImg src='/logo.png' className='homeLogo' />
        <span className='homeTitle'>BroChat</span>
      </IonHeader>
      <div className='messageContainer'>
      <div className="leftMessageContainer">
        <span className="leftMessage">
        Inzamam: Hey how are you ?lkrnlreg
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        </span>
      </div>
      <div className="rightMessageContainer">
        <span className="rightMessage">
        Shifa: I am fine.
        </span>
      </div>
      <div className="leftMessageContainer">
        <span className="leftMessage">
        Inzamam: Hey how are you ?lkrnlreg
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        </span>
      </div>
      <div className="rightMessageContainer">
        <span className="rightMessage">
        Shifa: I am fine.
        </span>
      </div>
      <div className="leftMessageContainer">
        <span className="leftMessage">
        Inzamam: Hey how are you ?lkrnlreg
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        </span>
      </div>
      <div className="rightMessageContainer">
        <span className="rightMessage">
        Shifa: I am fine.
        </span>
      </div>
      <div className="leftMessageContainer">
        <span className="leftMessage">
        Inzamam: Hey how are you ?lkrnlreg
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        </span>
      </div>
      <div className="rightMessageContainer">
        <span className="rightMessage">
        Shifa: I am fine.
        </span>
      </div>
      <div className="leftMessageContainer">
        <span className="leftMessage">
        Inzamam: Hey how are you ?lkrnlreg
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        </span>
      </div>
      <div className="rightMessageContainer">
        <span className="rightMessage">
        Shifa: I am fine.
        </span>
      </div>
      <div className="leftMessageContainer">
        <span className="leftMessage">
        Inzamam: Hey how are you ?lkrnlreg
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        </span>
      </div>
      <div className="rightMessageContainer">
        <span className="rightMessage">
        Shifa: I am fine.
        </span>
      </div>
      <div className="leftMessageContainer">
        <span className="leftMessage">
        Inzamam: Hey how are you ?lkrnlreg
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        Inzamam: Hey how are you ?
        </span>
      </div>
      <div className="rightMessageContainer">
        <span className="rightMessage">
        Shifa: I am fine.
        </span>
      </div>
      </div>
      <div className="homeSendContainer">
        <form action="#" className="homeSendContainerForm">
          <IonInput className='homeSendInput'/>
          <IonButton className='homeSendInputBtn' type='submit'>
            SEND
          </IonButton>
        </form>
      </div>
    </IonPage>
  );
};

export default Home;
