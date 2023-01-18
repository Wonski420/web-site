import React from "react";
import '../style/CFooter.css'
import CLogo from "./CLogo";
import logo from '../img/Unity-Emblem.png';

export const CFooter = (props) => {
    return (
        <div className="footer">
            <p>
                @copyright 2023
            </p>
            <CFooterLogo/>
        </div>
    );
}


class CFooterLogo extends CLogo{

    constructor(){
        super('footer-logo',logo);
    }

    render(){
        return(
            this.renderPartial()
        )
    }
}