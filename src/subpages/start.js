import React from "react";
import CContent from '../components/CContent.js';
import CHeader from '../components/CHeader.js';
import { CNavbar } from '../components/CNavbar.js';
import { CFooter } from '../components/CFooter.js';
import '../style/CHome.css'

export default function StartApp() {

  return (
    <div className="home-base">
      <CHeader />
      <CNavbar start={false} about={true} content={true}/>
      <CContent />
      <CFooter />
    </div>
  );
}
