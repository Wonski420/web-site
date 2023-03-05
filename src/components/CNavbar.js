import React from "react";
import '../style/CNavbar.css'
import { Link } from "react-router-dom";

const NavbarLinkButton = ({ text, target, applyTarget }) => {
    return (
        <div>
            {applyTarget ?
                <Link to={target}>
                    <button className="navbar-button">
                        {text}
                    </button>
                </Link>
                :
                <button className="navbar-button">
                    {text}
                </button>
            }
        </div>
    )
}

export const CNavbar = (props) => {
    return (
        <div className="navbar">
            <NavbarLinkButton text="Start" target="/start" applyTarget={props.start}/>
            <NavbarLinkButton text="Content" target="/content" applyTarget={props.content}/>
            <NavbarLinkButton text="About" target="/about" applyTarget={props.about}/>
        </div>
    );
}