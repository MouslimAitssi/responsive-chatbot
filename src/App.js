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


  occurences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
  }

  tf(word, string) {
    var s1 = string.split(" ");
    return this.occurences(string, word, true)/s1.length;
  }
  

  similarity(string1, string2) {

    var freq = 0;
    var s1 = string1.split(" ");
    var s2 = string2.split(" ");
  
    for(var i = 0; i < s1.length; i++) {
      freq = freq + this.occurences(string2, s1[i], true);
    }
    return freq/(s1.length*s2.length);
  }

  /*df(string) {
    var df = 0
    for(var i = 0; i < this.state.responses.length; i++) {
      df = df + tf(this.state.responses[i][0], string, true);
    }
    return df;
  }*/

  getMessage() {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateSent= new Date().getHours() + ":" + ( "0" + new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length) + " | " + monthNames[new Date().getMonth()] + " " + ("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length);
    const msgSent = {id:"user", msg: this.refs.message.value, date: dateSent } ;
    //this.setState({message:msgSent});
    this.setState(prevState => ({
      messages: [...prevState.messages, msgSent]
    }))
    this.getResponse(msgSent.msg);
  }

  getResponse(messageSent) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var response, index = 0, freq = 0, sim = 0;
    for(var i = 0; i < this.state.responses.length; i++) {
      sim = this.similarity(messageSent, this.state.responses[i][0]);
      
      if (sim > freq) {
        freq = sim;
        index = i;
      }
    }
    console.log(freq);
    if(freq > 0.1) {
      response = this.state.responses[index][1];
    }
    else {
      response = "Désolé, je n'ai pas bien compris, pouvez vous reformuler?";
    }
    const dateResponse = new Date().getHours() + ":" + ("0"+new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length) + " | " + monthNames[new Date().getMonth()] + " " + ("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length);
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

  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) {
      this.getMessage(); this.refs.message.value="";
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
                <NavbarBrand>Parlez avec votre chatbot, éspérons que vous seriez satisfaits.</NavbarBrand>
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
                      <input id="myInput"type="text" className="form-control" placeholder="write message..." ref="message" onKeyPress={this.enterPressed.bind(this)}/>
                      <div className="input-group-append">
                        <Button id = "myBtn" className="input-group-text" onClick={(e) =>{this.getMessage(); this.refs.message.value=""} }><i className="fa fa-paper-plane"></i></Button>
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