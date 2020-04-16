import React, { Component } from 'react';
import { authenticationService } from '../services/authentication.service'

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            loginResponse: null
        }
    }

    login = () => {
        var user = authenticationService.login();
        console.log(user);
    }
    
    componentDidMount(){
    }       

    render(){
        return(
            <div>
                <button color='red' onClick={this.login}>Click</button>
            </div>
        );
    }
}

export default LoginPage;