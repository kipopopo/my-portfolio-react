import React from "react";
import "../styles/main.scss";

function BgShapes(props) {
  let styleColors = {
    color: props.color,
    backgroundColor: props.bgColor,
  };

  return (
    <div className="bgshapes">
      <div className="bg control-bigcrcle-1"></div>
      <div className="bg bgshape-bigcircle-1" style={styleColors}></div>
      <div className="bg bgshape-halfcircle-1" style={styleColors}></div>
    </div>
  );
}
export default BgShapes;
