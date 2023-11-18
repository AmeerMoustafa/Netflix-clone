import React from "react";
import ReactDOM from "react-dom/client";
import Loginpage from "./Loginpage.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Loginpage />
    <Footer />
  </React.StrictMode>
);
