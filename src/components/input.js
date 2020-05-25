import React, {Component} from 'react';

export default class Input extends Component {

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
                    <input type="text" className="form-control" placeholder="write message..."/>
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-paper-plane"></i></span>
                    </div>
                </div>
            </div>
        );
    }
}