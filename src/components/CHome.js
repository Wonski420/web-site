import React, { Component } from "react";
import '../style/CHome.css'
import ReactPlayer from 'react-player';
import { useState, useRef, useEffect } from "react";
import { Waypoint } from 'react-waypoint';

const VideoText = ({ text }) => {
    return (
        <div className="h1-home">
            <h1>{text}</h1>
        </div>
    )
}

const Video = ({ url }) => {
    let [shouldPlay, updatePlayState] = useState(false);

    let handleEnterViewport = function () {
        updatePlayState(true);
    }
    let handleExitViewport = function () {
        updatePlayState(false);
    }

    return (
        <div className="player-background">
            <Waypoint className="waypoint"
                onEnter={handleEnterViewport}
                onLeave={handleExitViewport}>
            </Waypoint>
            <ReactPlayer className="player-background" autoplay muted
                allowfullscreen="allowfullscreen"
                config={{
                    youtube: {
                        frameborder: 0,
                        fs: 0,
                        disablekb: 1,
                        controls: 0,
                        playerVars: { showinfo: 1 }
                    },
                }}
                url={url}
                width='100%'
                height='100%'
                playing={shouldPlay}
                loop='true'
                controls='false'
            />
            <Waypoint className="waypoint"
                onEnter={handleEnterViewport}
                onLeave={handleExitViewport}>
            </Waypoint>
        </div>
    )
}

class CHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-main">
                <div className="home-noblur">
                    <VideoText text={"First trailer"}></VideoText>
                    <Video url="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" />
                    <VideoText text={"Second trailer"}></VideoText>
                    <Video url="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" />
                    <VideoText text={"Third trailer"}></VideoText>
                    <Video url="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" />
                    <VideoText text={"Fourth trailer"}></VideoText>
                    <Video url="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" />
                </div>
            </div>
        );
    }
}

export default CHome