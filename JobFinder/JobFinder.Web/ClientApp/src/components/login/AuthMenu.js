import React, { Component } from 'react';
import {Route, Switch} from 'react-router';
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
    
    componentDidMount(){
        console.log(1);
    }       

    render(){
        return(
            <Switch>
                <Route path="/auth/login" component={LoginPage} />
                <Route path="/auth/register" component={RegisterPage}/>
            </Switch>
        );
    }
}

export default AuthMenu;