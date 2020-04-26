import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import ItemList from './ItemsList';
import ItemInfo from './ItemInfo';
import AddItemMenu from './AddItemMenu';
import DeleteItemPage from './DeleteItemPage';

class ItemMenu extends Component{
    constructor(props){
        super(props);
        this.state = { item : this.props.item}
    }

    render(){
        return(
            <Switch>
                <Route exact path="/items" component={ ItemList } />
                <Route exact path="/items/add" component={AddItemMenu}/>
                <Route exact path="/items/:number" component={ItemInfo} />
                <Route path="/items/delete/:number" component={DeleteItemPage}/>
            </Switch>
        );
    }
}

export default ItemMenu;