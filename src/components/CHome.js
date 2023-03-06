import React, { Component } from "react";
import '../style/CHome.css'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const VideoText = ({text}) => {
    return(
        <div className="h1-home">
            <h1>{text}</h1>
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
                    <ReactPlayer className="player-background" autoplay muted
                        allowfullscreen="allowfullscreen"
                        ref='player'
                        config={{
                            youtube: {
                                frameborder: 0,
                                fs: 0,
                                disablekb: 1,
                                controls: 0,
                                playerVars: { showinfo: 1 }
                            },
                        }}
                        url="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1"
                        width='100%'
                        height='100%'
                        playing='true'
                        loop='true'
                        controls='false'
                    />
                    <VideoText text={"Second trailer"}></VideoText>
                    <ReactPlayer className="player-background" autoplay muted
                        allowfullscreen="allowfullscreen"
                        ref='player'
                        config={{
                            youtube: {
                                frameborder: 0,
                                fs: 0,
                                disablekb: 1,
                                controls: 0,
                                playerVars: { showinfo: 1 }
                            },
                        }}
                        url="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1"
                        width='100%'
                        height='100%'
                        playing='true'
                        loop='true'
                        controls='false'
                    />
                </div>
            </div>
        );
    }
}

export default CHome


