import './App.css';
import StartApp from './subpages/start';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import React, { Component } from "react";
import About from './subpages/about';
import Content from './subpages/content';
import PlayerSite from './subpages/player';
import {reveal} from './components/Reveal';

const App = () => {

  return (
    <MainPage/>
  );
}

class MainPage extends Component{
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="mainpage">
      <Router>
        <Routes>
          <Route exact path="/" element={<StartApp />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/content" element={<Content />} />
          <Route exact path="/playersite" element={<PlayerSite />}/>
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;


window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();