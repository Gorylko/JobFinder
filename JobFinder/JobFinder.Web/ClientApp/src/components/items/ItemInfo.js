import React, { Component } from 'react';

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
        fetch(`api/v1/items/${this.state.itemId}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                item: result,
                isLoaded: true
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
        }

    render(){
        if(!this.state.isLoaded){
            return(
                <h1>Loading...</h1>
            );
        }
        return(
        <h1>Info about item {this.state.item.name}</h1>
        );
    }
}

export default ItemInfo;