import React, { Component } from 'react';

class Warning extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowed: props.isShowed,
            message: props.message
        }
    }
    
    render(){
        return(
            <div>
                <span className='red-text'>{this.state.message}</span>
            </div>
        );
    }
}

export default Warning;