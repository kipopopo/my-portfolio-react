import React from "react";
import "../styles/main.scss";
import { ReactComponent as LightIcon } from "../assets/icons/light-mode.svg";
import { ReactComponent as DarkIcon } from "../assets/icons/dark-mode.svg";

function MainContent(props) {
  let height;
  if (props.toggleNav) {
    height = "90vh";
  } else {
    height = "99%";
  }

  let styleToggleDark = {
    backgroundColor: props.bgColor,
    color: props.color,
    top: props.togglePosition,
    height: height,
  };
  let styleToggleDarkBtn = {
    backgroundColor: props.bgColor,
    color: props.color,
    top: props.togglePosition,
  };

  return (
    <div className="main-container" style={styleToggleDark}>
      <div className="main-content">
        <p>
          MAIN CONTAINER <br /> background-color: {props.bgColor} <br /> color:{" "}
          {props.color} <br />
          toggle-dark: {props.toggleDark ? "true" : "false"}
        </p>
      </div>
      <button className="ld-mode btn-pointer" onClick={props.handleToggle}>
        <div className="icon">
          {props.toggleDark ? (
            <LightIcon fill={props.color} width="2rem" height="2rem" />
          ) : (
            <DarkIcon fill={props.color} width="1.5rem" height="2rem" />
          )}
        </div>
        <div className="text" style={styleToggleDarkBtn}>
          <p>{props.toggleDark ? "Light up!" : "Light off!"}</p>
        </div>
      </button>
    </div>
  );
}
export default MainContent;
