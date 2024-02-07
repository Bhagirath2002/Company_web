import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import SpaceCity1 from "../assets/SpaceCity1.jpg";
// import SpaceCity5 from "../assets/SpaceCity5.jpeg";
// import SpaceCity8 from "../assets/SpaceCity8.jpeg";
// import SpaceCity9 from "../assets/SpaceCity9.jpeg";
const root = ReactDOM.createRoot(document.getElementById("root"));

// export const PurpleImages = [
//   {
//     src: { SpaceCity1 },
//   },
//   {
//     src: { SpaceCity5 },
//   },
//   {
//     src: { SpaceCity8 },
//   },
//   {
//     src: { SpaceCity9 },
//   },
// ];

// export const OrangeImages = [
//   {
//     src: SpaceOrange1,
//   },
//   {
//     src: SpaceOrange2,
//   },
//   {
//     src: SpaceOrange3,
//   },
//   {
//     src: SpaceOrange4,
//   },
// ];

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
