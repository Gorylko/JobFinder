import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { Route, Router } from 'react-router';
import ItemList from './ItemsList';
import ItemInfo from './ItemInfo';
import { PrivateRoute } from '../PrivateRoute';
import { createImportEqualsDeclaration } from 'typescript';
import CreateItemMenu from './CreateItemMenu';

class ItemMenu extends Component{
    constructor(props){
        super(props);
        this.state = { item : this.props.item}
    }

    render(){
        return(
            <Switch>
                <Route exact path="/items" component={ ItemList } />
                <PrivateRoute path="/items/add" component={CreateItemMenu}/>
                <Route path="/items/:number" component={ItemInfo} />
            </Switch>
        );
    }
}

export default ItemMenu;