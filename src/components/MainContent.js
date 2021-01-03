import React from "react";
import "../styles/main.scss";
import Home from "./MainContentComponents/Home";
import Projects from "./MainContentComponents/Projects";
import { ReactComponent as LightIcon } from "../assets/icons/light-mode.svg";
import { ReactComponent as DarkIcon } from "../assets/icons/dark-mode.svg";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function MainContent(props) {
  let height;
  if (props.toggleNav) {
    height = "90vh";
  } else {
    height = "99%";
  }

  let styleToggleDark = {
    // backgroundColor: props.bgColor,
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
    <div className="main-outer-container perspective-container">
      <div className="main-container" style={styleToggleDark}>
        <div className="main-content">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route path="/" exact>
                      <Home
                        color={props.bgColor}
                        bgColor={props.color}
                        toggleDark={props.toggleDark}
                        togglePosition={props.togglePosition}
                      />
                    </Route>
                    <Route path="/projects">
                      <Projects
                        color={props.color}
                        bgColor={props.bgColor}
                        toggleDark={props.toggleDark}
                      />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
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
    </div>
  );
}
export default MainContent;
