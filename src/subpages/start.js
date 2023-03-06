import React from "react";
import CContent from '../components/CContent.js';
import CHeader from '../components/CHeader.js';
import { CNavbar } from '../components/CNavbar.js';
import { CFooter } from '../components/CFooter.js';
import '../style/CHome.css'
import '../style/Start.css'

export default function StartApp() {

  return (
    <div className="home-base">
      <CContent />
      <CHeader />
      <CNavbar start={false} about={true} content={true} playersite={true}/>
      <CFooter/>
    </div>
  );
}
