import React, { Component } from 'react';
import { itemService } from '../../services/item.service';

class DeleteItemPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            deleteItemId: props.match.params.number
        }
    }

    componentDidMount(){
        itemService.deleteById(this.state.deleteItemId)
        .then(()=>{
            this.props.history.push('/items');
        });
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default DeleteItemPage;