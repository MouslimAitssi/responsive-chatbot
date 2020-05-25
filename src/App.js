import React, { Component } from 'react';
import './App.css';
//import { Navbar, NavbarBrand } from 'reactstrap';
import chatbot from './images/chatbot.jpg';
import Response from './components/reponse';
import Message from './components/message';
import Input from './components/input'

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    
    return(
          <div className="container">
            <div className="msg-header">
              <div className="msg-header-img">
                <img src={chatbot} alt="chatbot img"/>
              </div>
              <div className="active">
                <h4>Votre CHATBOT</h4>
                <h6>Parlez avec moi</h6>
              </div>
              <div className="header-icons">
                <i className="fa fa-phone"></i>
                <i className="fa fa-video-camera"></i>
                <i className="fa fa-info-circle"></i>
              </div>
            </div>
            <div className="chat-page">
              <div className="msg-inbox">
                  <div className="chats">
                    <div className="msg-page">
                      <Message />
                      <Response />
                    </div>
                  </div>
                  <Input/>    
              </div>
            </div>
          </div>
    );
  }
}

export default App;