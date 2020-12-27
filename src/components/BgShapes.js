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
    "&:hover": {
      backgroundColor: props.color,
    },
  };
  let styleColorsTogglePos = {
    color: props.color,
    backgroundColor: props.bgColor,
    transform: translate,
  };

  const setSheenPosition = (xRatio, yRatio) => {
    // This creates a "distance" up to 400px each direction to offset the sheen
    const xOffset = 1 - (xRatio - 0.5) * 800;
    const yOffset = 1 - (yRatio - 0.5) * 800;
    document
      .getElementById("sheen")
      .style.setProperty("--sheenX", `${xOffset}px`);
    document
      .getElementById("sheen")
      .style.setProperty("--sheenY", `${yOffset}px`);
  };
  const handleMouseMove = (event) => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
    const yAxisDegree = (event.pageX / width) * 40 - 20;
    const xAxisDegree = (event.pageY / height) * -1 * 40 + 20;
    document.getElementById(
      "sheen"
    ).style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg) translate(0, ${props.togglePosition})`;
    // Set the sheen position
    setSheenPosition(event.pageX / width, event.pageY / width);
  };
  document.onmousemove = handleMouseMove;

  return (
    <div className="bgshapes">
      <div className="bg control-bigcircle-1" style={styleTogglePos}></div>
      <div
        id="sheen"
        className="bg bgshape-big circle"
        style={styleColorsTogglePos}
      ></div>
      <div className="bg bgshape-backbig circle"></div>
      <div className="bg bgshape-halfcircle-1" style={styleColors}></div>
    </div>
  );
}
export default BgShapes;
