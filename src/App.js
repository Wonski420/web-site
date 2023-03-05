import './App.css';
import CHome from './components/CHome.js';
import StartApp from './subpages/start';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import React from "react";
import About from './subpages/about';
import Content from './subpages/content';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CHome/>} />
        <Route exact path="/start" element={<StartApp />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/content" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
