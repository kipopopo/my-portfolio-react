import React from "react";
import Radium from "radium";
import SimpleBar from "simplebar-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "simplebar/dist/simplebar.min.css";
import Project1 from "./ProjectsComponents/Project1";
import Project2 from "./ProjectsComponents/Project2";
import Project3 from "./ProjectsComponents/Project3";

const Projects = (props) => {
  const menuList = ["one lorem ipsum lorem ipsum", "two", "three lorem ipsum"];

  let styles = {
    menuItems: {
      color: props.color,
      borderColor: props.color,
      ":hover": {
        color: props.bgColor,
        borderColor: "#ffff00",
        backgroundColor: props.color,
        boxShadow: `0.4rem 0.4rem ${props.bgColor}`,
      },
    },
    simpleBar: {
      height: `${77 - parseFloat(props.togglePosition)}vh`,
      transition: "height 0.3s",
    },
  };

  return (
    <Router basename="/my-portfolio-react/projects/">
      <div className="projects page">
        <div className="content">
          <div>
            <h3>My Projects</h3>
            <ul>
              {menuList.map((item, index) => (
                <Link to={`/${item.replace(/\s/g, "-")}`} key={index}>
                  <li
                    className="btn-pointer"
                    style={styles.menuItems}
                    key={`${index}`}
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <SimpleBar className="list-items" style={styles.simpleBar}>
            <Switch>
              <Route path={["/", `/${menuList[0].replace(/\s/g, "-")}`]} exact>
                <Project1 projectList={menuList} />
              </Route>
              <Route path={`/${menuList[1].replace(/\s/g, "-")}`}>
                <Project2 projectList={menuList} />
              </Route>
              <Route path={`/${menuList[2].replace(/\s/g, "-")}`}>
                <Project3 projectList={menuList} />
              </Route>
            </Switch>
          </SimpleBar>
        </div>
      </div>
    </Router>
  );
};
export default Radium(Projects);
