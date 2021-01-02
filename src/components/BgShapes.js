import React from "react";
import "../styles/main.scss";

function BgShapes(props) {
  let togglePositionCircle = props.togglePosition + 8;
  let translate = `translate(0, ${togglePositionCircle})`;
  let styleColorsTogglePos = {
    color: props.color,
    backgroundColor: props.bgColor,
    transform: translate,
  };

  return (
    <div className="bgshapes">
      <div className="bg bgshape-backbig circle"></div>
      <div className="bg bgshape-big circle" style={styleColorsTogglePos}></div>
    </div>
  );
}
export default BgShapes;
