import React, { Component } from 'react';
import './App.css';
import training from './components/training';
import { Navbar, NavbarBrand } from 'reactstrap';
import chatbot from './images/chatbot.jpg'
import user from './images/user.png'

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
                <h4>Votre chatbot.</h4>
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
                <div className="msg-inbox">
                  <div className="chats">
                    <div className="msg-page">
                      <div className="received-chats">
                        <div className="received-chats-img">
                          <img src={chatbot} alt="chatbot img"/>
                        </div>
                        <div className="received-msg">
                          <div className="received-msg-inbox">
                            <p>Bonjour, comment allez-vous?</p>
                            <span className="time">11:01 PM | October 11</span>
                          </div>
                        </div>
                      </div>

                      <div className="outgoing-chats">
                        <div className="outgoing-chats-img">
                          <img src={user} alt="user img"/>
                        </div>

                        <div className="outgoing-chats-msg">
                            <p>Hamdolillah akhawa lah y3ezzek.</p>
                            <span className="time">11:01 PM | October 11</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default App;
