import React from "react";
import "../styles/main.scss";
import { ReactComponent as LightIcon } from "../assets/icons/light-mode.svg";
import darkIcon from "../assets/icons/dark-mode.svg";

function MainContent() {
  return (
    <div className="main-container">
      <div className="main-content">
        <p>MAIN CONTAINER</p>
      </div>
      <div className="ld-mode">
        <div className="icon">
          <LightIcon fill="whitesmoke" width="2rem" height="2rem" />
        </div>
        <div className="text">
          <p>Light up!</p>
        </div>
      </div>
    </div>
  );
}
export default MainContent;
