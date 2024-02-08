import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Page from "./Pages/Page";


import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
