import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
        setActive(false);
      } else {
        setIsSmallScreen(false);
        setActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <Themetoggle />
          <div className="d-flex align-items-center">
           
            {isSmallScreen ? (
              <button className="menu__button nav_ac" onClick={handleToggle}>
                {!isActive ? <VscClose /> : <VscGrabber />}
              </button>
            ) : (
              <div className="the_menu">
                <Link to="/" className="my-3">
                  Home
                </Link>
                <Link to="/portfolio" className="my-3">
                  Project Experience
                </Link>
                <Link to="/about" className="my-3">
                  About me
                </Link>
                <Link to="/contact" className="my-3">
                  Contact me
                </Link>
              </div>
            )}
          </div>
        </div>

        {isSmallScreen && (
          <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
            <div className="bg__menu h-100">
              <div className="menu__wrapper">
                <div className="menu__container p-3">
                  <ul className="the_menu">
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/" className="my-3">
                        Home
                      </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/portfolio" className="my-3">
                        Project Experience
                      </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/about" className="my-3">
                        About me
                      </Link>
                    </li>
                    <li className="menu_item">
                      <Link onClick={handleToggle} to="/contact" className="my-3">
                        Contact me
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="br-top"></div>
        <div className="br-bottom"></div>
        <div className="br-left"></div>
        <div className="br-right"></div>
      </header>
    </>
  );
};

export default Headermain;
