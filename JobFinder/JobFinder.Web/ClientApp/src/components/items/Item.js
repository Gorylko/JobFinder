import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component{
    constructor(props){
        super(props);
        this.state = { item : this.props.item}
    }

    render(){
        return(
            <div class="col s12 m7">
              <div class="card" key={this.state.item.id}>
                <div class="card-image">
                    <img src="https://materializecss.com/images/office.jpg"/>
                    <Link to={`/items/${this.state.item.id}`} class="halfway-fab btn-floating pink">
                        <i class="material-icons">info_outline</i>
                    </Link>
                  <span class="card-title">{this.state.item.name}</span>
                </div>
                <div class="card-content">
                  <p>Manufacturer</p>
                </div>
              </div>
            </div>
        );
    }
}

export default Item;