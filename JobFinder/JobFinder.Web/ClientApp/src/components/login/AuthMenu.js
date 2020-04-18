import React, { Component } from 'react';
import {Route} from 'react-router';
import { authenticationService } from '../../services/authentication.service'
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

class AuthMenu extends Component{
    constructor(props){
        super(props);
        if (authenticationService.currentUserValue) { 
            this.props.history.push('/');
        }
        this.state = {
            isLoading: true,
            loginResponse: null
        }
    }

    login = () => {
        var user = authenticationService.login("fishLogin", "fishPassword");
        console.log(user);
    }
    
    componentDidMount(){
    }       

    render(){
        return(
            <div>
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage}/>
            </div>
        );
    }
}

export default AuthMenu;