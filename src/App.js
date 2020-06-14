import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import chatbot from './images/chatbot.jpg';
import { Button} from 'reactstrap';
import Menu from './components/MenuComponent';
//import { RESPONSES } from './shared/ques-rep';
import { liste } from './shared/file'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      responses:liste,
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
    var natural = require("natural");
    var tokenizer = new natural.WordTokenizer();
    var s = tokenizer.tokenize(string);
    console.log("tf : " + word + " "+ this.occurences(string, word, true)/(s.length));
    return this.occurences(string, word, true)/(s.length);
  }

  idf(word){
    var inc = 1;
    for(var i = 0; i < this.state.responses.length; i++) 
    {
      if(this.state.responses[i][0].includes(word)) {
        inc++;
      }
    }
    console.log("idf : " + word + " " +inc);
    return Math.log10(this.state.responses.length/inc);
  }

  tfidf(word, string) {
    var tfidf = this.tf(word, string)*this.idf(word);
    console.log("tfidf : " + word + " " + tfidf);
    return tfidf;
  }

  similarity(string1, string2) {

    var sim = 0;
    var natural = require("natural");
    var tokenizer = new natural.WordTokenizer();
    var s1 = tokenizer.tokenize(string1);
    for(var i = 0; i < s1.length; i++) {
      sim = sim + this.tfidf(s1[i], string2);
    }
    console.log("sim : " + sim);
    return sim;
  }

  getMessage() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateSent= new Date().getHours() + ":" + ( "0" + new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length) + " | " + monthNames[new Date().getMonth()] + " " + ("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length);
    const msgSent = {id:"user", msg: this.refs.message.value, date: dateSent } ;
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
      response = "Sorry, I didn't understand well !!";
    }
    const dateResponse = new Date().getHours() + ":" + ("0"+new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length) + " | " + monthNames[new Date().getMonth()] + " " + ("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length);
    const msgResponse = {id:"chatbot", msg: response, date:dateResponse};
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