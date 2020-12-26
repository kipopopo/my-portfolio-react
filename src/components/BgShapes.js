import React from "react";
import "../styles/main.scss";

function BgShapes(props) {
  let translate = `translate(0, ${props.togglePosition})`;
  let styleTogglePos = {
    transform: translate,
  };
  let styleColors = {
    color: props.color,
    backgroundColor: props.bgColor,
  };
  let styleColorsTogglePos = {
    color: props.color,
    backgroundColor: props.bgColor,
    transform: translate,
  };

  return (
    <div className="bgshapes">
      <div className="bg control-bigcrcle-1" style={styleTogglePos}></div>
      <div
        className="bg bgshape-bigcircle-1"
        style={styleColorsTogglePos}
      ></div>
      <div className="bg bgshape-halfcircle-1" style={styleColors}></div>
    </div>
  );
}
export default BgShapes;
