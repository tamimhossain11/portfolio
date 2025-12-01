import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { BsSunFill } from "react-icons/bs";
import "./style.css";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "dark");
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); 
  }, [theme]);
  return (
    <div className="theme-toggle-btn" onClick={themetoggle} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      {theme === "dark" ? (
        <BsSunFill className="theme-icon" />
      ) : (
        <WiMoonAltWaningCrescent4 className="theme-icon" />
      )}
    </div>
  );
};

export default Themetoggle;
