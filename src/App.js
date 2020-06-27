import React from "react";
import "./styles.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <div className="container">
      <h1 id="header">FCC Calculator</h1>
      <Display />
      <Buttons />
    </div>
  );
}
