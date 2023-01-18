import React, { Component } from "react";
import '../style/CContent.css'
import defaultText from '../res/text.json'
import formText from '../res/form.json'

const DivVideo = ({ link,title }) => {
    return (
        <div className="div-video">
            <iframe src={link} title={title}>
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

const TextForm = ({ content }) => {
    const [toggleForm, setToggleForm] = React.useState(true);
    const [exitForm, setExitForm] = React.useState(false);

    return (
        <div>
            {toggleForm && exitForm == false ?
                <div class="form" draggable='true' id='draggable' onLoad={LoadForm()}>
                    <button className="form-exit" onClick={() => setExitForm(true)}>X</button>
                    <div class="title">Welcome</div>
                    <div class="subtitle">Let's create your account!</div>
                    <div class="input-container ic1">
                        <input id="firstname" class="input" type="text" placeholder=" " />
                        <div class="cut"></div>
                        <label for="firstname" class="placeholder">First name</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder=" " />
                        <div class="cut"></div>
                        <label for="lastname" class="placeholder">Last name</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="email" class="input" type="text" placeholder=" " />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">Email</label>
                    </div>
                    <button type="text" class="submit" onClick={() => setToggleForm(false)}>submit</button>
                </div>
                :
                exitForm ?
                    '' :
                    <div className="content">
                        <TextBox title='Thanks for your opinion' text={formText} />
                    </div>
            }
        </div>
    );
}

class CContent extends Component {

    render() {
        return (
            <div className="content-main">
                <div className='content'>
                    <DivVideo link="https://www.youtube.com/embed/mXFiP-2Ip4Y" title="1"/>
                    <DivVideo link="https://www.youtube.com/embed/mXFiP-2Ip4Y" title="2"/>
                    <DivVideo link="https://www.youtube.com/embed/mXFiP-2Ip4Y" title="3"/>
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
                <TextForm />
            </div>
        );
    }
}

export default CContent


//events
//2
document.addEventListener("ondrop", function (event) {
    let element = document.getElementById("draggable");
    element.style.backgroundColor = "red";

});
//3
document.addEventListener('dragend', function (event) {
    document.getElementById("draggable").style.backgroundColor = "#15172b";
});
//4
function LoadForm(){
    //alert('Please Complete form');
}
