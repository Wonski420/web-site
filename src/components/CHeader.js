import React, { Component } from "react";
import '../style/CHeader.css'
import CLogo from '../components/CLogo';

function refreshPage() {
    window.location.reload(false);
}

class CHeader extends Component{

    render(){
        return(
            <div className="header-container">
            <CLogo/>
            </div>
        );
    }
}

export default CHeader