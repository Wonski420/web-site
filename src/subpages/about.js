import React from "react";
import '../style/About.css';
import CHeader from '../components/CHeader.js';
import { CNavbar } from '../components/CNavbar.js';
import '../style/CContent.css';
import {TextBox} from "../components/CContent";
import defaultText from '../res/default.json'
import { CFooter } from "../components/CFooter";

export default function About() {

  return (
    <div>
      <div className="content-main">
          <TextBox title='Content site.' text={defaultText} />
          <TextBox title='Textbox 1.' text={defaultText} />
          <TextBox title='Textbox 2.' text={defaultText} />
          <TextBox title='Textbox 3.' text={defaultText} />
          </div>
      <CHeader />
      <CNavbar start={true} about={false} content={true} playersite={true}/>
      <CFooter/>
    </div>
  );
}
