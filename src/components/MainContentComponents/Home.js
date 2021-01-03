import React, { useState } from "react";
import BgShapes from "./HomeComponents/BgShapes";
import Intro from "./HomeComponents/IntroComponents/Intro";

const Home = (props) => {
  const [isBlur, setIsBlur] = useState(false);
  const handleIsBlur = () => {
    setIsBlur(!isBlur);
  };
  return (
    <div className="home">
      <BgShapes color={props.color} bgColor={props.bgColor} isBlur={isBlur} />
      <Intro
        color={props.color}
        bgColor={props.bgColor}
        toggleDark={props.toggleDark}
        handleIsBlur={handleIsBlur}
      />
    </div>
  );
};

export default Home;
