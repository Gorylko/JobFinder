import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { authenticationService } from '../../services/authentication.service';
import ErrorMessage from '../main/ErrorMessage';
import { errorMessages } from '../../helpers/error-messages'
import { Link } from 'react-router-dom';
import Warning from '../main/Warning';

class LoginPage extends Component{
    constructor(props){
        super(props);
        if (authenticationService.isLogged) { 
            this.props.history.push('/');
        }
        this.state = {
            isWarningShowed: false,
            username: '',
            password: ''
        }
    }

    login = () => {
        authenticationService.login(this.state.username, this.state.password)
        .then(() => {
            if(authenticationService.isLogged){
                this.props.history.push('/');
            }
            else{
                this.setState({
                    isWarningShowed: true
                });
            }
        });
            
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
                        <label for="username">Логин</label>
                        <ErrorMessage getMessage={errorMessages.IsLengthOptimal(this.state.username)} />
                    </div>
                    <div class="input-field col s6">
                        <input id="password" type="password" class="validate" onChange={this.handleInputChange}/>
                        <label for="password">Пароль</label>
                        <ErrorMessage getMessage={errorMessages.IsLengthOptimal(this.state.password)} />
                    </div>
                </div>
                {this.state.isWarningShowed &&
                    <Warning message='incorrect login or password'/>
                }
                <button class="waves-effect waves-light btn-large jf-green-button" type="submit" name="action">Подтвердить</button>
                </form>
            </div>
            <div>
                <Link to='/auth/register'>
                    <a class="waves-effect waves-light btn-small white-text jf-green-button">Регистрация</a>
                </Link>
            </div>
        </>
        );
    }
}

export default LoginPage;