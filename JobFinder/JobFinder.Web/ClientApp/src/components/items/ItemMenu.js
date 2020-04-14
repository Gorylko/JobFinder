import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import ItemList from './ItemsList';
import ItemInfo from './ItemInfo';

class ItemMenu extends Component{
    constructor(props){
        super(props);
        this.state = { item : this.props.item}
    }

    render(){
        return(
            <Switch>
                <Route exact path="/items" component={ ItemList } />
                <Route path="/items/:number" component={ItemInfo}/>
            </Switch>
        );
    }
}

export default ItemMenu;