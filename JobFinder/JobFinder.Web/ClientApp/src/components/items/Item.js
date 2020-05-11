import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemImage from '../../images/ItemPrev.png'

class Item extends Component{
    constructor(props){
        super(props);
        this.state = { item : this.props.item}
    }

    render(){
        return(
            <div class="col s4 m4 l4">
              <div class="card jf-item hoverable" key={this.state.item.id}>
                <div class="card-image">
                    <img src={ItemImage}/>
                    <Link to={`/items/${this.state.item.id}`} class="halfway-fab btn-floating pink">
                        <i class="material-icons jf-green-info-button">info_outline</i>
                    </Link>
                  <span class="card-title"><b>{this.state.item.name}</b></span>
                </div>
                <div class="card-content jf-text-dark">
                  <p>{this.state.item.description}</p>
                </div>
              </div>
            </div>
        );
    }
}

export default Item;