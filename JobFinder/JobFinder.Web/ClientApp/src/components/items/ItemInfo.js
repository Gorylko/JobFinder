import React, { Component } from 'react';
import { itemService } from '../../services/item.service'

class ItemInfo extends Component{

    constructor(props){

        super(props);
        this.state = {
            isLoaded: false,
            itemId: props.match.params.number, 
            item: null
        }
    }

    componentDidMount() {
      itemService.getById(this.state.itemId)
      .then(item =>{
        this.setState({
          item: item,
          isLoaded: true
        });
      })
    }

    render(){
        console.log(this.state.itemId);
        if(!this.state.isLoaded){
            return(
              <div class="progress">
                <div class="indeterminate"></div>
              </div>
            );
        }
        return(
          <div>
            <h2>{this.state.item.name}</h2>
            <p class="flow-text">{this.state.item.description}</p>
            <blockquote>
            {this.state.item.phoneNumber}<br/>
            {this.state.item.email}
            </blockquote>
            <blockquote>
            {this.state.item.additionalContacts}
            </blockquote>
         </div>
           );
    }
}

export default ItemInfo;