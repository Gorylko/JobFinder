import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { Route, Router } from 'react-router';
import ItemList from './ItemsList';
import ItemInfo from './ItemInfo';
import { PrivateRoute } from '../PrivateRoute';
import { createImportEqualsDeclaration } from 'typescript';
import AddItemMenu from './AddItemMenu';

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
            </Switch>
        );
    }
}

export default ItemMenu;