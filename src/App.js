import React, { useState } from "react";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";

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

  return (
    <div className="App">
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
  );
}

export default App;
