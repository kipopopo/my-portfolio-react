import React from "react";
import "../styles/main.scss";

function Intro(props) {
  let styles = {
    color: props.color,
  };

  return (
    <div className="intro">
      <div className="grid-2c">
        <div className="outer-intro-text">
          <div className="intro-text" style={styles}>
            <div>
              <h2 className="title">Lorem ipsum title</h2>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                excepturi eveniet assumenda aut error quo fugit. Porro quo ullam
                ratione? Id cum quidem, necessitatibus illum aliquid quod rem
                nisi odit?
              </p>
            </div>
          </div>
        </div>
        <div className="intro-image">
          <p>Image presentation here</p>
        </div>
      </div>
    </div>
  );
}
export default Intro;
