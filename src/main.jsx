import React from "react";
import ReactDOM from "react-dom/client";
import Loginpage from "./Loginpage.jsx";
import Slider from "./components/reusable/Slider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Loginpage />
    <Slider title="Title" />
  </React.StrictMode>
);
