import React from "react";
import BgShapes from "./BgShapes";
import Intro from "./Intro";

const Home = (props) => {
  return (
    <div className="home">
      <BgShapes
        color={props.color}
        bgColor={props.bgColor}
        togglePosition={props.togglePosition}
      />
      <Intro
        color={props.color}
        bgColor={props.bgColor}
        toggleDark={props.toggleDark}
      />
    </div>
  );
};

export default Home;
