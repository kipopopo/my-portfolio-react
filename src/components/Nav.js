import React from "react";
import "../styles/main.scss";
import Logo from "../logo.png";
import { ReactComponent as Arrow } from "../assets/icons/arrow-cone.svg";

const menuItems = [{ name: "About" }, { name: "Contact" }];

function Nav(props) {
  let translateY = `translate(0px, ${props.togglePosition})`;
  let style = {
    transform: translateY,
  };
  let boxShadow = `0 0.35rem ${props.color}`;
  let styleNav = {
    boxShadow: boxShadow,
  };
  let rotateArrow;
  if (!props.toggleNav) {
    rotateArrow = `rotate(180deg)`;
  } else {
    rotateArrow = `rotate(0deg)`;
  }
  let styleArrow = {
    transform: rotateArrow,
  };

  return (
    <div className="component-nav" style={style}>
      <nav style={styleNav}>
        <div
          className="nav-toggle btn-pointer"
          onClick={props.handleToggle}
          style={styleNav}
        >
          <Arrow height="1rem" className="arrow" style={styleArrow} />
        </div>
        <div className="logo-img">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="nav-links">
          {menuItems.map((menuItem) => (
            <div className="btn-pointer">
              <li>{menuItem.name}</li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
