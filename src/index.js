// import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BarChart from "./AnimatedBar/BarChart";
import Tree from "./CollapsibleTree/Tree";
import data from "./CollapsibleTree/data";
import { Canvas } from "@react-vertex/core";
// import React, { Component } from "react";
// import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Sphere/Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
