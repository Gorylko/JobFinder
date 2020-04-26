import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import { authenticationService } from '../../services/authentication.service';

class ItemList extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          }; 
    }
   
    componentDidMount() {
        fetch("api/v1/items")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }

    render(){
        let itemList = this.state.items.map(item=>{
            return(
                <Item item={item}/>
            )
        })
        return(
            <div className="container">
              {authenticationService.isLogged && 
                <Link to='items/add'>
                  <a class="waves-effect waves-light btn-large white-text jf-green-button">Add new<i class="large material-icons right">create_new_folder</i></a>
               </Link>
              }
              <h3 className="jf-title-text">Our items</h3>
              
              <div>
                  <div className="row">
                      {itemList}
                  </div>
              </div>
            </div>
        )
    }
}

export default ItemList;