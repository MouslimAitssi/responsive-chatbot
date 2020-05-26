import React, {Component} from 'react';
import { Button } from 'reactstrap';
import '../App.css';

import Message from './messageComponent';

export default class Menu extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        /*console.log(this.props.messages);
        const menu = this.props.messages.map((message) =>{
            return (
                {message}
            );
        }
        );*/
        console.log(this.props.message.msg);

        return(
            <Message id={this.props.message.id} message={this.props.message.msg}/>
        );
    }
}