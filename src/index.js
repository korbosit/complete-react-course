import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";

// const header = <h1>This is my first React App</h1>;

// console.log(header);

// ReactDom.render(header, document.getElementById("root"));

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

// let div = document.getElementById("root");
// div.appendChild(App());
