import React, { Component } from "react";
import user from '../images/user.png';
import '../App.css';

class Response extends Component{

    render() {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return(
            <div className="outgoing-chats">
                <div className="outgoing-chats-img">
                 <img src={user} alt="user img"/>
                </div>
                <div className="outgoing-chats-msg">
                  <p>Hamdolillah akhawa lah y3ezzek.</p>
                  <span className="time">{new Date().getHours()}:{("0"+new Date().getMinutes().toString()).substring(("0"+(new Date().getMinutes()).toString()).length-2,("0"+(new Date().getMinutes()).toString()).length)} | {monthNames[new Date().getMonth()]} {("0"+new Date().getDate().toString()).substring(("0"+(new Date().getDate()).toString()).length-2,("0"+(new Date().getDate()).toString()).length)}</span>
                </div>
            </div>
        );
    }
}
export default Response;