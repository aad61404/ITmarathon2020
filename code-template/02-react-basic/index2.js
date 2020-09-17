// 跟App2.js 一起使用
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App name="大雄" age="12" />
  </React.StrictMode>,
  rootElement
);
