import React, { Component } from "react";
import Item from '../items/Item'
import { connect } from 'react-redux'
import '../../styles/main.css';
import image from '../../images/LogoType-1.png';

class Home extends Component{
    constructor(props){
        super(props); 
        
    }
        
    render(){
        return(
            <div>
                <h1>Home page</h1>
                <img src={image} className="jf-img"/>
            </div>
            );
    }
}

export default Home