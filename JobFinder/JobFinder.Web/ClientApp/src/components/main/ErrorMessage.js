import React, { Component } from 'react';

class ErrorMessage extends Component{
    constructor(props){
        super(props);

        this.state = {
            getMessage: props.getMessage
        }
    }

    render(){
            return(
                <span class="helper-text" data-error="wrong" data-success="right">{this.state.getMessage}</span>
            );
    }
}

export default ErrorMessage;