import React, {Component} from 'react';
import { Button } from 'reactstrap';

export default class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {message:""};
    }


    getmessage() {
        this.setState({message:this.refs.message.value});        
    }

    render() {
        return(
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
                        <Button className="input-group-text" onClick={(e) =>{this.getmessage()}}><i className="fa fa-paper-plane"></i></Button>
                    </div>
                </div>
            </div>
        );
    }
}