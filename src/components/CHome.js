import React, { Component } from "react";
import '../style/CHome.css'
import CContent from './CContent.js';
import CHeader from './CHeader.js';
import { CNavbar } from './CNavbar.js';
import { CFooter } from './CFooter.js';
import ReactPlayer from 'react-player';
import CAlert from '../components/CAlert.js'
import $ from 'jquery';

class CHome extends Component {

    show = false;

    jQueryCode = () =>{
        $('.alert').hide(10000);
    }

    ShowSite() {
        this.show = true;
        console.log(this.show);
        this.forceUpdate();
    }

    componentDidMount(){
        this.jQueryCode();
    }

    render() {
        return (
            <div>
                {this.show ? (
                    <div className="home-base">
                        <CHeader />
                        <CNavbar />
                        <CContent />
                        <CFooter />
                    </div>
                ) : (
                    <div>
                        <CAlert className='alert'/>
                        <div className="home-blur">
                            <ReactPlayer className="player-background" autoplay muted
                                allowfullscreen="allowfullscreen"
                                ref='player'
                                config={{
                                    youtube:{
                                        frameborder:0,
                                        fs:0,
                                        disablekb:1,
                                        controls: 0,
                                        playerVars: {showinfo:1}
                                    },
                                }}
                                url="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1"
                                width='100%'
                                height='100%'
                                playing = 'true'
                                loop ='true'
                                controls = 'false'
                            />
                        </div>
                        <div className="home" id ='homeid'>
                            <h1 className="h1-home">Game design</h1>
                            <button className="home-button" onClick={() => this.ShowSite()}>Welcome</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default CHome


//events 
// 1
window.addEventListener("afterprint", onprint);

function onprint() {
  alert("This document is now being printed");
}

