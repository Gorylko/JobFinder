import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { authenticationService } from '../../services/authentication.service';
import ErrorMessage from '../main/ErrorMessage';
import { errorMessages } from '../../helpers/error-messages'
import { Link } from 'react-router-dom';

class LoginPage extends Component{
    constructor(props){
        super(props);
        if (authenticationService.currentUserValue) { 
            this.props.history.push('/');
        }
        this.state = {
            loginResponse: null,
            username: '1',
            password: '1'
        }
    }

    login = () => {
        if(authenticationService.login(this.state.username, this.state.password)){
            this.props.history.push('/');
        }
    }

    handleSubmit = (event) => {
        this.login();
        event.preventDefault();
    }    

    handleInputChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render(){
        return(
            <>
            <div class="row">
                <form class="col s12" onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="username" type="text" class="validate" onChange={this.handleInputChange}/>
                        <label for="username">Username</label>
                        <ErrorMessage getMessage={errorMessages.IsLengthOptimal(this.state.username)} />
                    </div>
                    <div class="input-field col s6">
                        <input id="password" type="password" class="validate" onChange={this.handleInputChange}/>
                        <label for="password">Password</label>
                        <ErrorMessage getMessage={errorMessages.IsLengthOptimal(this.state.password)} />
                    </div>
                </div>
                <button class="waves-effect waves-light btn-large" type="submit" name="action">Submit</button>
                </form>
            </div>
    
            <div>
                <Link to='/register'>
                    <a class="waves-effect waves-light btn-small white-text">Register</a>
                </Link>
            </div>
        </>
        );
    }
}

export default LoginPage;