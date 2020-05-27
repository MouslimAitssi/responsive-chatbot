import React, {Component} from 'react';
import chatbot from '../images/chatbot.jpg';
import user from '../images/user.png';
import '../App.css';

export default class Message extends Component {


    constructor(props) {
        super(props);
        this.state={
            id:"",
            message:""
        }
    }

    render() {
        
        
        if(this.props.id =="chatbot"){
            return(
                <div className="received-chats">
                    <div className="received-chats-img">
                      <img src={chatbot} alt="chatbot img"/>
                    </div>
                    <div className="received-msg">
                        <div className="received-msg-inbox">
                           <p>{this.props.message}</p>
                           <span className="time">{this.props.date}</span>
                       </div>
                   </div>
               </div>
            );
        }
        else if(this.props.id=="user"){
            
            return(
                <div className="outgoing-chats">
                    <div className="outgoing-chats-img">
                     <img src={user} alt="user img"/>
                    </div>
                    <div className="outgoing-chats-msg">
                      <p>{this.props.message}</p>
                      <span className="time">{this.props.date}</span>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}