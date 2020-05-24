import React, {Component} from 'react';
import chatbot from '../images/chatbot.jpg'
import '../App.css'

class Message extends Component {

    render() {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return(
            <div className="received-chats">
                <div className="received-chats-img">
                  <img src={chatbot} alt="chatbot img"/>
                </div>
                <div className="received-msg">
                    <div className="received-msg-inbox">
                       <p>Bonjour, comment allez-vous?</p>
                        <span className="time">{new Date().getHours()}:{("0"+new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length)} | {monthNames[new Date().getMonth()]} {("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length)}</span>
                   </div>
               </div>
           </div>
        );
    }
}

export default Message;