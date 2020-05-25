import React, {Component} from 'react';
import chatbot from '../images/chatbot.jpg';
import user from '../images/user.png';
import '../App.css'

export default class Message extends Component {


    constructor(props) {
        super(props);

        this.state={
            id:"",
            msg:""
        }

    }

    render() {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if(this.props.id =="chatbot"){
            return(
                <div className="received-chats">
                    <div className="received-chats-img">
                      <img src={chatbot} alt="chatbot img"/>
                    </div>
                    <div className="received-msg">
                        <div className="received-msg-inbox">
                           <p>{this.props.msg}</p>
                            <span className="time">{new Date().getHours()}:{("0"+new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length)} | {monthNames[new Date().getMonth()]} {("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length)}</span>
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
                      <p>{this.props.msg}</p>
                      <span className="time">{new Date().getHours()}:{("0"+new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length)} | {monthNames[new Date().getMonth()]} {("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length)}</span>
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

