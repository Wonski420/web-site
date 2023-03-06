import React from "react";
import '../style/CFooter.css'
import CLogo from "./CLogo";
import logo from '../img/monstercampicon.png';

export const CFooter = (props) => {
    return (
        <div>
            {props.hidden ?
                <div className="footer-hidden">
                    <p>
                        @copyright 2023
                    </p>
                    <CFooterLogo />
                </div>
                :
                <div className="footer">
                    <p>
                        @copyright 2023
                    </p>
                    <CFooterLogo />
                </div>
            }
        </div>
    );
}


class CFooterLogo extends CLogo {

    constructor() {
        super('footer-logo', logo);
    }

    render() {
        return (
            this.renderPartial()
        )
    }
}