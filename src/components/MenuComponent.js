import React, {Component} from 'react';
import '../App.css';
import Message from './messageComponent';

export default class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var k=0;
        //console.log(this.props.messages);
        const menu = this.props.messages.map((message) =>{
            return (
                <div key={k++}>
                    <Message id={message.id} message={message.msg}/>
                </div>
            );
        }
        );
        return(
            <div className="col">
                {menu}
            </div>
        );
    }
}