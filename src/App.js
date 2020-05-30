import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import chatbot from './images/chatbot.jpg';
import { Button} from 'reactstrap';
import Menu from './components/MenuComponent';
import { RESPONSES } from './shared/ques-rep';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      responses:RESPONSES,
      messages : []
    };
  }


  tf(word) {
    var tf = 0;
    for(var i = 0; i < RESPONSES.length; i++) {
      if(RESPONSES[i][0].includes(word)) {
        tf++;
      }
    }
    return tf;
  }

  getMessage() {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dateSent= new Date().getHours() + ":" + ( "0"+new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length) + " | " + monthNames[new Date().getMonth()] + " " + ("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length);
    const msgSent = {id:"user", msg: this.refs.message.value, date: dateSent } ;
    //this.setState({message:msgSent});
    this.setState(prevState => ({
      messages: [...prevState.messages, msgSent]
    }))
    this.getResponse(msgSent.msg);
  }

  getResponse(messageSent) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var response;
    for(var i=0; i<this.state.responses.length; i++) {
      console.log(this.state.responses[i][0]);
      if(this.state.responses[i][0] == messageSent){
        response = this.state.responses[i][1];
        break;
      }
      else {
        response = "désolé, pouvez-vous reformuler?";
      }
    }
    const dateResponse= new Date().getHours() + ":" + ("0"+new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length) + " | " + monthNames[new Date().getMonth()] + " " + ("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length);
    const msgResponse = {id:"chatbot", msg: response, date:dateResponse};
    //this.setState({response:msgResponse});
    this.setState(prevState => ({
      messages: [...prevState.messages, msgResponse]
    }))
  }

  onInputChanged() {

    if(this.state.message == "") {
      return (<div></div>);
    }
    else {
      return(
        <Menu messages={this.state.messages}/>        
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
                <NavbarBrand>Parlez avec votre chatbot médecin, éspérons que vous seriez satisfaits.</NavbarBrand>
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
                      {this.onInputChanged()}
                    </div>
                  </div>
                    
                  <div className="msg-bottom">
                    <div className="bottom-icons">
                      <i className="fa fa-plus-circle"></i><i className="fa fa-camera"></i><i className="fa fa-microphone"></i><i className="fa fa-smile-o"></i>
                    </div>

                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="write message..." ref="message"/>
                      <div className="input-group-append">
                        <Button className="input-group-text" onClick={(e) =>{this.getMessage(); this.refs.message.value=""}}><i className="fa fa-paper-plane"></i></Button>
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