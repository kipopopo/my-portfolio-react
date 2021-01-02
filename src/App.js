import React, { useState } from "react";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import bgCircleVideo from "./assets/bg-circle-video.mp4";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/main.scss";
import "./styles/font.css";

function App() {
  const [toggleNav, setToggleNav] = useState(true);
  const [togglePosition, setTogglePosition] = useState("0px");
  const handleToggle = () => {
    if (toggleNav) {
      setTogglePosition("-9.475vh");
    } else {
      setTogglePosition("0px");
    }
    setToggleNav(!toggleNav);
  };

  const [toggleDark, setToggleDark] = useState(true);
  const [bgColor, setBgColor] = useState("#111111");
  const [color, setColor] = useState("whitesmoke");
  const handleToggleMainContent = () => {
    setToggleDark(!toggleDark);
    if (bgColor === "#111111") {
      setBgColor("whitesmoke");
      setColor("#111111");
    } else {
      setBgColor("#111111");
      setColor("whitesmoke");
    }
  };

  let styles = {
    backgroundColor: bgColor,
  };

  let styleVideoInvert;
  if (!toggleDark) {
    styleVideoInvert = { filter: "grayscale(1) invert(1)" };
  } else {
    styleVideoInvert = { filter: "grayscale(1) invert(0)" };
  }

  return (
    <Router basename="/my-portfolio-react/">
      <div className="App" style={styles}>
        <video
          src={bgCircleVideo}
          muted
          autoPlay
          loop
          style={styleVideoInvert}
        ></video>
        <Nav
          toggleNav={toggleNav}
          togglePosition={togglePosition}
          handleToggle={handleToggle}
          color={color}
        />
        <MainContent
          toggleNav={toggleNav}
          togglePosition={togglePosition}
          handleToggle={handleToggleMainContent}
          toggleDark={toggleDark}
          color={color}
          bgColor={bgColor}
        />
      </div>
    </Router>
  );
}

export default App;
