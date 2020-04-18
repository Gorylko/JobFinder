import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { authenticationService } from '../../services/authentication.service';
import ErrorMessage from '../main/ErrorMessage';
import { errorMessages } from '../../helpers/error-messages'
import { Link } from 'react-router-dom';


class RegisterPage extends Component{
    constructor(props){
        super(props);
        if (authenticationService.currentUserValue) { 
            this.props.history.push('/');
        }
        this.state = {
            registerResponse: null,
            username: '1',
            password: '1'
        }
    }

    register = () => {
        var user = authenticationService.register("fishLogin", "fishPassword");
    }
    
    handleSubmit = (event) => {
        this.register();
        event.preventDefault();
    }    

    handleInputChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    componentDidMount(){
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
                <div class="row">
                    <div class="input-field col s12">
                        <input id="phone-number" type="tel" class="validate" onChange={this.handleInputChange}/>
                        <label for="phone-number">Phone Number</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Need to enter phone</span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" onChange={this.handleInputChange}/>
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Need to enter email</span>
                    </div>
                </div>
                <button class="waves-effect waves-light btn-large" type="submit" name="action">Submit</button>
                </form>
            </div>
    
            <div>
                <Link to='/login'>
                    <a class="waves-effect waves-light btn-small white-text">Login</a>
                </Link>
            </div>
        </>
        );
    }
}

export default RegisterPage;