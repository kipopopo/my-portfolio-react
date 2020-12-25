import React from "react";
import "../styles/main.scss";
import Logo from "../logo.png";

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

  return (
    <div className="component-nav" style={style}>
      <nav style={styleNav}>
        <div
          className="nav-toggle btn-pointer"
          onClick={props.handleToggle}
          style={styleNav}
        >
          <span>^</span>
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
