import { Component } from "react";
import '../style/CHeader.css';
import logo from '../img/Unity-Emblem.png';

class CLogo extends Component{

    static refreshPage() {
        window.refreshPage();
    }

    constructor(style,img){
        super();
        this.state = {
            styleclass: style,
            image: img
        };
    }

    renderPartial(){
        return(
            <div className={this.state.styleclass}>
                <img src={this.state.image} className='headerLogo' alt='logo' onClick={CLogo.refreshPage}></img>
            </div>
        );
    }

    render(){
        return(
            <div className='header-logo'>
                <img src={logo} className='headerLogo' alt='logo' onClick={CLogo.refreshPage}></img>
            </div>
        );
    }
}

export default CLogo;