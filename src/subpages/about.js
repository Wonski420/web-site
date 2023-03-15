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
          <div className="content">
          <TextBox title='About us' text={defaultText} hide={false}/>
          </div>
          <div className="content">
          <TextBox title='About us' text={defaultText} />
          </div>
          <div className="content">
          <TextBox title='About us' text={defaultText} />
          </div>
      </div>
      <CHeader />
      <CNavbar start={true} about={false} content={true} playersite={true}/>
      <CFooter hidden={true}/>
    </div>
  );
}
