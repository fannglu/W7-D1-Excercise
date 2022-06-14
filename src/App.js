// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import BarChart from "./AnimatedBar/BarChart";
import TreeApp from "./CollapsibleTree/Tree";
import data from "./CollapsibleTree/data";

import Example from "./Sphere/index"
// import { useViewportSize } from "@react-vertex/dom-hooks";

class App extends Component {
  render() {
    //  const { width, height } = useViewportSize();
    return (
      <div className="App">
        <p>Test</p>
        <div>
          <BarChart />
        </div>
        <div>
          <TreeApp data={data} width={600} height={500} />
        </div>
        <div>
          <Example />
        </div>
      </div>
    );
  }
}

export default App;
