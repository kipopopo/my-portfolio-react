import React from "react";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";

import "./styles/main.scss";
import "./styles/font.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent />
    </div>
  );
}

export default App;
