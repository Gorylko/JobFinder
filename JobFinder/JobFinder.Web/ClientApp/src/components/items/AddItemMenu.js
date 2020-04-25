import React, { Component } from 'react';
import { itemService } from '../../services/item.service';
import Warning from '../main/Warning';
import { Redirect } from 'react-router-dom';

class AddItemMenu extends Component{
    constructor(props){
        super(props);

        this.state = {
            isWarningShowed: false,
            name: null,
            description: null,
            owner: null,
            phoneNumber: null,
            email: null,
            additionalContacts: null,
            requirements: null,
            benefits: null
        }
    }

    handleInputChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log(this.state);
    }

    handleSubmit = (event) =>{
        var item = {
            name: this.state.name,
            description: this.state.description,
            owner: this.state.prefix,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            additionalContacts: this.state.additionalContacts,
            benefits: this.state.benefits,
            requirements: this.state.requirements
        }

        itemService.save(item)
        .then(isOk =>{
            this.setState({
                isWarningShowed: !isOk
            });
            if(isOk){
                this.props.history.push('/items');
            }
        });
        event.preventDefault();
    }

    render(){
        return (
        <div>
            <p class="flow-text">Добавление новой записи</p>
            <div class="row">
                <form class="col s12" onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="name" type="text" data-length="10" onChange={this.handleInputChange}/>
                            <label for="name">Name</label>
                        </div>              
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="description" class="materialize-textarea" data-length="120" onChange={this.handleInputChange}></textarea>
                            <label for="description">Description</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="requirements" class="materialize-textarea" data-length="120" onChange={this.handleInputChange}></textarea>
                            <label for="requirements">Requirements</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="benefits" class="materialize-textarea" data-length="120" onChange={this.handleInputChange}></textarea>
                            <label for="benefits">Benefits</label>
                        </div>
                        <div class="input-field col s12">
                            <textarea id="additionalContacts" class="materialize-textarea" data-length="120" onChange={this.handleInputChange}></textarea>
                            <label for="additionalContacts">Additional Contacts</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="owner" type="text" class="validate" onChange={this.handleInputChange}/>
                            <label for="owner">Owner</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">phone</i>
                            <input id="phoneNumber" type="tel" class="validate" onChange={this.handleInputChange}/>
                            <label for="phoneNumber">Phone</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">email</i>
                            <input id="email" type="email" class="validate" onChange={this.handleInputChange}/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <button class="waves-effect waves-light btn-large" type="submit" name="action">Submit</button>
                </form>
                {this.state.isWarningShowed &&
                <Warning message='invalid input'/>
                }
            </div>
        </div>
        );
    }
}

export default AddItemMenu;