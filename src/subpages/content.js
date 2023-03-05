import React from "react";
import '../style/Content.css'
import CHeader from '../components/CHeader.js';
import { CNavbar } from '../components/CNavbar.js';
import { TextBox } from "../components/CContent";
import '../style/CContent.css'
import defaultText from '../res/default.json'

export default function Content() {

  return (
    <div className="content-main">
      <CHeader />
      <CNavbar start={true} about={true} content={false}/>
      <div className="content-div">
          <TextBox title='Content site.' text={defaultText} />
          <TextBox title='Textbox 1.' text={defaultText} />
          <TextBox title='Textbox 2.' text={defaultText} />
          <TextBox title='Textbox 3.' text={defaultText} />

          <Input id = "input1"/>
          
      </div>
    </div>
  );
}

const Input = (props) =>{
  return(
    <input type="text" id={props.id} onFocus={()=>focusFunction(props.id)} onBlur={()=>blurFunction(props.id)}></input>
  )
}

function focusFunction(myid) {
  document.getElementById(myid).style.background = "blue";
}

function blurFunction(myid) {
  document.getElementById(myid).style.background = "white";
}