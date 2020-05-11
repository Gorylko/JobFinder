import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { authenticationService } from '../../services/authentication.service';
import ErrorMessage from '../main/ErrorMessage';
import { errorMessages } from '../../helpers/error-messages'
import { Link } from 'react-router-dom';
import Warning from '../main/Warning';


class RegisterPage extends Component{
    constructor(props){
        super(props);
        if (authenticationService.currentUserValue) { 
            this.props.history.push('/');
        }
        this.state = {
            isWarningShowed: false,
            username: '',
            password: ''
        }
    }

    register = () => {
        authenticationService.register(this.state.username, this.state.password)
        .then(isOk =>{
            this.setState({
                isWarningShowed: !isOk
            });
            if(isOk){
                this.props.history.push('/');
            }
        });
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
                        <label for="username">Логин</label>
                        <ErrorMessage getMessage={errorMessages.IsLengthOptimal(this.state.username)} />
                    </div>
                    <div class="input-field col s6">
                        <input id="password" type="password" class="validate" onChange={this.handleInputChange}/>
                        <label for="password">Пароль</label>
                        <ErrorMessage getMessage={errorMessages.IsLengthOptimal(this.state.password)} />
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="phone-number" type="tel" class="validate" onChange={this.handleInputChange}/>
                        <label for="phone-number">Номер телефона</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Необходимо ввести номер телефона</span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" onChange={this.handleInputChange}/>
                        <label for="email">Почта</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Необходимо ввести почту</span>
                    </div>
                </div>
                    <button class="waves-effect waves-light btn-large jf-green-button" type="submit" name="action">Зарегистрироваться</button>
                </form>
            </div>
            {this.state.isWarningShowed &&
                <Warning message="incorrect input"/>
            }
            <div>
                <Link to='/auth/login'>
                    <a class="waves-effect waves-light btn-small white-text jf-green-button">Вернуться</a>
                </Link>
            </div>
        </>
        );
    }
}

export default RegisterPage;