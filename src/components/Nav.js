import React from "react";
import "../styles/main.scss";
import Logo from "../logo.png";
import { ReactComponent as Arrow } from "../assets/icons/arrow-cone.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { introAlwaysTrue, introAlwaysFalse } from "../actions";

function Nav(props) {
  const dispatch = useDispatch();
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
          <div className="btn-pointer">
            <Link to={`/`} onClick={() => dispatch(introAlwaysTrue())}>
              <li>Home</li>
            </Link>
          </div>
          <div className="btn-pointer">
            <Link to={`/projects`} onClick={() => dispatch(introAlwaysFalse())}>
              <li>Projects</li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
