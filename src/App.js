import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import chatbot from './images/chatbot.jpg';
import Message from './components/messageComponent';
import { Button, Input } from 'reactstrap';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {message:""};
  }

  getMessage() {
    this.setState({message:this.refs.message.value});
  }



  onInputChanged() {

    if(this.state.message == "") {
      return <div></div>
    }
    else {
      return(
        <Message msg = {this.state.message}/>
      );
    }
  }

  render() {
    return(
          <div>
            <Navbar dark color= "primary">
                <NavbarBrand href="/">
                  <div className="msg-header-img">
                    <img src = {chatbot} alt="chatbot img"/>
                    
                  </div>
                  <div className="active"><h3>CHATBOT</h3></div>
                </NavbarBrand>
                <NavbarBrand>Parlez avec votre chatbot medecin, éspérons que vous seriez satisfaits.</NavbarBrand>
            </Navbar>
            <div className="container">
              <div className="msg-header">
                <div className="msg-header-img">
                  <img src={chatbot} alt="chatbot img"/>
                </div>
                <div className="active">
                  <h4>CHATBOT</h4>
                  <h6>Parlez avec moi...</h6>
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
                        <Message id="user" msg="Bonjour, comment allez-vous?"/>
                        <Message id="chatbot" msg="Bien, merci."/>
                      </div>
                    </div>
                    
                    <div className="msg-bottom">
                        <div className="bottom-icons">
                            <i className="fa fa-plus-circle"></i>
                            <i className="fa fa-camera"></i>
                            <i className="fa fa-microphone"></i>
                            <i className="fa fa-smile-o"></i>
                        </div>

                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="write message..." ref="message"/>
                            <div className="input-group-append">
                                <Button className="input-group-text" onClick={(e) =>{this.getMessage()}}><i className="fa fa-paper-plane"></i></Button>
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