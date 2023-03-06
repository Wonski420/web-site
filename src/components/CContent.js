import React, { Component } from "react";
import '../style/CContent.css'
import defaultText from '../res/text.json'
import formText from '../res/form.json'
import CHome from "./CHome";
import ReactPlayer from "react-player";

export const DivVideo = ({ link,title }) => {
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

export const TextBox = ({ title, text }) => {
    return (
        <div>
            <h1 id = {title}>{title}</h1>
            <p className="textbox">
                {text.content}
            </p>
        </div>
    )
}

class CContent extends Component {

    render() {
        return (
            <div className="content-main">
                <div className='content'>
                    <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1"/>
                    <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1"/>
                </div>
                <div className='content'>
                    <TextBox title='Unity Engine' text={defaultText}
                    />
                    <TextBox title='Unity Engine' text={defaultText}
                    />
                </div>
                <div className='content'>
                    <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1"/>
                    <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1"/>
                </div>
            </div>
        );
    }
}

export default CContent
