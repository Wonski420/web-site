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
            {props.start ? <NavbarLinkButton text="Start" target="/" applyTarget={props.start}/> : ""} 
            {props.content ? <NavbarLinkButton text="Content" target="/content" applyTarget={props.content}/> : ""}
            {props.about ? <NavbarLinkButton text="Games" target="/about" applyTarget={props.about}/> : ""}
            {props.playersite ?<NavbarLinkButton text="Watch" target="/playersite" applyTarget={props.playersite}/> : ""}
        </div>
    );
}