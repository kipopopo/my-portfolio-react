import React from "react";
import Radium, { StyleRoot } from "radium";

const circleNum = 10;

const randomPosAll = [];
for (let i = 0; i < circleNum; i++) {
  const randomPosXY = {
    X: `${Math.floor(Math.random() * 1321) + 1}`,
    Y: `${Math.floor(Math.random() * 831) + 1}`,
    leviY: `${(Math.random() * (25 - 0) - 0).toFixed(0)}`,
    hue: `${Math.floor(Math.random() * 180 - -180) - 180}`,
    size: `${Math.floor(Math.random() * 175) + 75}`,
    timer: `${(Math.random() * (1.0 - 0) + 0).toFixed(2)}`,
  };
  randomPosAll.push(randomPosXY);
}

function Shapes(props) {
  let blurFx = [];
  for (let i = circleNum; i > 0; i--) {
    if (props.isBlur === true) {
      blurFx.push(circleNum / (i / 2));
    } else {
      blurFx.push(0);
    }
  }

  const levitates = [];
  randomPosAll.map((item, index) => {
    levitates[index] = Radium.keyframes({
      "0%": { transform: `translate(${item.X}px, ${item.Y}px)` },
      "50%": {
        transform: `translate(${item.X}px, ${
          parseInt(item.Y, 10) + parseInt(item.leviY)
        }px)`,
      },
      "100%": { transform: `translate(${item.X}px, ${item.Y}px)` },
    });
    return levitates;
  });

  const styles = [];
  levitates.map((item, index) => {
    styles[index] = {
      levitateRandomPos: {
        width: `${randomPosAll[index].size}px`,
        height: `${randomPosAll[index].size}px`,
        filter: `hue-rotate(${randomPosAll[index].hue}deg) blur(${blurFx[index]}px)`,
        animation: `levitates ${
          3 + parseFloat(randomPosAll[index].timer)
        }s infinite ease-in-out`,
        animationName: levitates[index],
      },
    };
    return styles;
  });

  let styleColorsTogglePos = {
    color: props.color,
    backgroundColor: props.bgColor,
  };

  return (
    <div className="bgshapes">
      <div className="bg bgshape-big circle" style={styleColorsTogglePos}></div>
      {styles.map((item, index) => {
        return (
          <div
            key={index}
            className="bg bgshape-backbig circle"
            style={item.levitateRandomPos}
          ></div>
        );
      })}
    </div>
  );
}
const StyledShapes = Radium(Shapes);

function BgShapes(props) {
  return (
    <StyleRoot>
      <StyledShapes
        color={props.color}
        bgColor={props.bgColor}
        isBlur={props.isBlur}
      />
    </StyleRoot>
  );
}
export default Radium(BgShapes);
