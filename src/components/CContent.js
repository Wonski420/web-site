import React, { Component, useState } from "react";
import { Waypoint } from "react-waypoint";
import '../style/CContent.css'
import defaultText from '../res/text.json'
import ReactPlayer from "react-player";
import '../style/CHome.css'

export const DivVideo = ({ link }) => {
    return (
        <div className="div-video">
            <ReactPlayer
                autoplay muted
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
                url={link}
                width='100%'
                height='100%'
            />
        </div>
    )
}

export const TextBox = ({ title, text,hide }) => {
    let [shouldPlay, updatePlayState] = useState(false);

    let handleEnterViewport = function () {
        updatePlayState(true);
    }
    let handleExitViewport = function () {
        updatePlayState(false);
    }

    return (
        <div>
            {!hide ? shouldPlay ?
                <div className="reveal active">
                    <h1 id={title}>{title}</h1>
                    <p className="textbox">
                        {text.content}
                    </p>
                </div>
                :
                <div className="reveal">
                    <h1 id={title}>{title}</h1>
                    <p className="textbox">
                        {text.content}
                    </p>
                </div>
            : <div className="reveal active">
            <h1 id={title}>{title}</h1>
            <p className="textbox">
                {text.content}
            </p>
        </div>}
            <Waypoint className="waypoint"
                onEnter={handleEnterViewport}
                onLeave={handleExitViewport}>
            </Waypoint>
        </div>

    )
}


class CContent extends Component {

    render() {
        return (
            <div className="content-main">
                <div className='content'>
                    <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1" />
                    <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1" />
                </div>
                <div className='content'>
                    <TextBox title='Unity Engine' text={defaultText}
                    />
                    <TextBox title='Unity Engine' text={defaultText}
                    />
                </div>
                <div className='content'>
                    <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1" />
                    <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1" />
                </div>
            </div>
        );
    }
}

export default CContent
