import React from "react";
import ReactDOM from "react-dom";
import Infoport from "./Components/Infoport";

import "./styles.css";

function App() {
  return (
    <>
      <Infoport
        type="area2d"
        title="Countries With Most Oil Reserves [2017-18]"
      />
      <Infoport
        type="column2d"
        title="Countries With Most Oil Reserves [2017-18]"
      />
      <Infoport
        type="column2d"
        title="Countries With Most Oil Reserves [2017-18]"
      />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
