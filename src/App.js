import React from "react";
import Nav from "./components/Nav";

import "./styles/main.scss";
import "./styles/font.css";

const divStyle = {
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "0.3s",
};
const pStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
};

function App() {
  return (
    <div className="App">
      <Nav />
      <div style={divStyle}>
        <p style={pStyle}>MAIN CONTAINER</p>
      </div>
    </div>
  );
}

export default App;
