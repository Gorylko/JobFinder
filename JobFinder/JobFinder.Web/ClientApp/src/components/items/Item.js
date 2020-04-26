import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <img src="https://www.artit-k.com/wp-content/uploads/2015/03/PaperColorMaterialDesign_Green.png"/>
                    <Link to={`/items/${this.state.item.id}`} class="halfway-fab btn-floating pink">
                        <i class="material-icons jf-green-info-button">info_outline</i>
                    </Link>
                  <span class="card-title"><b>{this.state.item.name}</b></span>
                </div>
                <div class="card-content jf-text-dark">
                  <p>Manufacturer</p>
                </div>
              </div>
            </div>
        );
    }
}

export default Item;