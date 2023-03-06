import React from "react";
import '../style/Content.css'
import CHeader from '../components/CHeader.js';
import { CNavbar } from '../components/CNavbar.js';
import { TextBox, DivVideo } from "../components/CContent";
import '../style/CContent.css'
import defaultText from '../res/default.json'
import { CFooter } from "../components/CFooter";

export default function Content() {

  return (
    <div>
      <div className="content-main">
      <div className='content'>
          <TextBox title={"Great content"} text={defaultText}/>
        </div>
        <div className='content'>
          <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1" />
          <DivVideo link="https://www.youtube.com/embed/ca2ME4Wy0eM?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" title="1" />
        </div>
        <div className='content'>
          <TextBox title={"Great content"} text={defaultText}/>
        </div>
        <div className='content'>
          <TextBox title={"Great content"} text={defaultText}/>
        </div>
        <div className='content'>
          <TextBox title={"Great content"} text={defaultText}/>
        </div>
        <div className='content'>
          <TextBox title={"Great content"} text={defaultText}/>
        </div>
        <div className='content'>
          <TextBox title={"Great content"} text={defaultText}/>
        </div>
        <div className='content'>
          <TextBox title={"Great content"} text={defaultText}/>
        </div>
        <div className='content'>
          <TextBox title={"Great content"} text={defaultText}/>
        </div>
        <div className='content'>
          <TextBox title={"Great content"} text={defaultText}/>
        </div>
      </div>
      <CHeader />
      <CNavbar start={true} about={true} content={false} playersite={true}/>
      <CFooter hidden = {true} />
    </div>
  );
}