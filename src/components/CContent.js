import React, { Component } from "react";
import '../style/CContent.css'
import defaultText from '../res/text.json'

const DivVideo = ({ link }) => {
    return (
        <div className="div-video">
            <iframe src={link}>
            </iframe>
        </div>
    )
}

const TextBox = ({ title, text }) => {
    return (
        <div>
            <h1 onClick={() => { alert(title) }}>{title}</h1>
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
                    <DivVideo link="https://www.youtube.com/embed/mXFiP-2Ip4Y" />
                    <DivVideo link="https://www.youtube.com/embed/mXFiP-2Ip4Y" />
                    <DivVideo link="https://www.youtube.com/embed/mXFiP-2Ip4Y" />
                </div>
                <div className='content'>
                    <TextBox title='Unity Engine' text={defaultText}
                    />
                    <TextBox title='Unity Engine' text={defaultText}
                    />
                </div>
                <div className='content'>
                    <TextBox title='Unity Engine' text={defaultText}
                    />
                    <TextBox title='Unity Engine' text={defaultText}
                    />
                    <TextBox title='Unity Engine' text={defaultText}
                    />
                </div>
            </div>
        );
    }
}

export default CContent