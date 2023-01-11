import React, { Component } from "react";
import logo from '../img/Unity-Emblem.png';
import '../style/CHeader.css'

class CHeader extends Component{
    render(){
        return(
            <div className='headerContainer'>
                <img src={logo} className='headerLogo' alt='logo'></img>
            </div>
        );
    }
}

export default CHeader