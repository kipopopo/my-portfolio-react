import React from "react";
import "../styles/main.scss";
import Logo from "../logo.png";

const menuItems = [{ name: "About" }, { name: "Contact" }];

function Nav() {
  return (
    <div className="component-nav">
      <nav>
        <div className="logo-img">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="nav-links">
          {menuItems.map((menuItem) => (
            <div>
              <li>{menuItem.name}</li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
