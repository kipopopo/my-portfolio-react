import React from "react";
import Radium from "radium";
import "./introTitle.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { introToggle } from "../../../../actions";

function Intro(props) {
  const dispatch = useDispatch();

  let styleBtnIntro = {
    color: props.bgColor,
    borderColor: props.bgColor,
    ":hover": {
      color: "#ffff00",
      borderColor: "#ffff00",
      backgroundColor: "#111111",
      boxShadow: `0.35rem 0.35rem ${props.bgColor}`,
    },
  };

  let styles = {
    color: props.color,
  };

  return (
    <div className="intro page">
      <div className="grid-2c">
        <div className="outer-intro-text">
          <div className="intro-text" style={styles}>
            <div>
              <h2 className="title">
                I'm <span></span>
              </h2>
              <p className="description">
                Self-taught front-end web developer. <br />
                <b>"Soon-to-be"</b> expert in React.js and a lot more to come.
              </p>
            </div>
          </div>
          <div
            className="ctrl-blur-circles"
            onMouseOver={props.handleIsBlur}
            onMouseOut={props.handleIsBlur}
          ></div>
        </div>
        <div className="intro-image">
          <div className="outer-btn">
            <div className="bfr-btn-title">
              <h2>See what I've made</h2>
            </div>
            <div className="btn">
              <Link to="/projects">
                <button
                  className="btn-pointer"
                  style={styleBtnIntro}
                  onClick={() => dispatch(introToggle())}
                >
                  Click me!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const StyledIntro = Radium(Intro);
export default StyledIntro;
