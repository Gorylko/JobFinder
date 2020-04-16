import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

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
        console.log(2);
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
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