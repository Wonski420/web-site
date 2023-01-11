import React from "react";
import '../style/CNavbar.css'

export const CNavbar = () => {
    return (
        <div className="navbar">
            <button className="navbar-button">Start</button>
            <button className="navbar-button">Content</button>
            <button className="navbar-button">About</button>
        </div>
    );
}