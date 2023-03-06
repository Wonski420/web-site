import { Component } from "react";
import '../style/CHeader.css';
import logo from '../img/monstercampicon.png';
import { Link } from 'react-router-dom';

class CLogo extends Component {

    constructor(style, img) {
        super();
        this.state = {
            styleclass: style,
            image: img
        };
    }

    renderPartial() {
        return (
            <div className={this.state.styleclass}>
                <Link to="/">
                    <img src={this.state.image} className='headerLogo' alt='logo'></img>
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className='headerContainer'>
                <Link to="/">
                    <img src={logo} className='headerLogo' alt='logo'></img>
                </Link>
            </div>
        );
    }
}

export default CLogo;