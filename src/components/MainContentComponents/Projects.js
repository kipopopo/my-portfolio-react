import React from "react";
import Radium from "radium";

const Projects = (props) => {
  const menuList = ["one lorem ipsum lorem ipsum", "two", "three lorem ipsum"];

  let styleMenuItems = {
    color: props.color,
    borderColor: props.color,
    ":hover": {
      color: props.bgColor,
      borderColor: "#ffff00",
      backgroundColor: props.color,
      boxShadow: `0.4rem 0.4rem ${props.bgColor}`,
    },
  };

  return (
    <div className="projects page">
      <div className="content">
        <div>
          <h3>My Projects</h3>
          <ul>
            {menuList.map((item, index) => (
              <li className="btn-pointer" style={styleMenuItems} key={index}>
                Menu {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>project items shown here</div>
        </div>
      </div>
    </div>
  );
};
const StyledProjects = Radium(Projects);
export default StyledProjects;
