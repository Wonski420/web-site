import './App.css';
import StartApp from './subpages/start';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import React from "react";
import About from './subpages/about';
import Content from './subpages/content';
import PlayerSite from './subpages/player';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartApp />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/playersite" element={<PlayerSite />}/>
      </Routes>
    </Router>
  );
}

export default App;
