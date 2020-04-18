import React, { Component } from 'react';
import { authenticationService } from '../../services/authentication.service'

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
        var user = authenticationService.login("fishLogin", "fishPassword");
        console.log(user);
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
    }    

    handleInputChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log(this.state.username + ' 2 ' + this.state.password)
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
                    </div>
                    <div class="input-field col s6">
                        <input id="password" type="password" class="validate" onChange={this.handleInputChange}/>
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="phone-number" type="tel" class="validate" onChange={this.handleInputChange}/>
                        <label for="phone-number">Phone Number</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" onChange={this.handleInputChange}/>
                        <label for="email">Email</label>
                    </div>
                </div>
                <input type="submit" value="Submit" />
                </form>
            </div>
    
            <div>
                <button color='red' onClick={this.register}>Click</button>
            </div>
        </>
        );
    }
}

export default LoginPage;