import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    const newState = !isActive;
    setActive(newState);
    if (newState) {
      document.body.classList.add("ovhidden");
    } else {
      document.body.classList.remove("ovhidden");
    }
  };

  const handleLinkClick = () => {
    setActive(false);
    document.body.classList.remove("ovhidden");
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsSmallScreen(isMobile);
      if (!isMobile) {
        // Always close menu when switching to desktop
        setActive(false);
        document.body.classList.remove("ovhidden");
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Initialize on mount
    const isMobile = window.innerWidth <= 768;
    setIsSmallScreen(isMobile);
    setActive(false);
    document.body.classList.remove("ovhidden");

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      // Cleanup: ensure body scroll is restored
      document.body.classList.remove("ovhidden");
    };
  }, []);

  return (
    <>
      <header className={`fixed-top site__header ${isScrolled ? "scrolled" : ""}`}>
        <div className="d-flex align-items-center justify-content-between">
          <a className="navbar-brand nav_ac" href="#home">
            {logotext}
          </a>
          <div className="d-flex align-items-center">
            {isSmallScreen ? (
              <>
                <Themetoggle />
                <button className="menu__button nav_ac" onClick={handleToggle}>
                  {isActive ? <VscClose /> : <VscGrabber />}
                </button>
              </>
            ) : (
              <div className="the_menu">
                <a href="#home" className="nav-link">
                  Home
                </a>
                <a href="#about" className="nav-link">
                  About me
                </a>
                <a href="#portfolio" className="nav-link">
                  Project Experience
                </a>
                <a href="#eca" className="nav-link">
                  ECA
                </a>
                <a href="#contact" className="nav-link">
                  Contact me
                </a>
                <Themetoggle />
              </div>
            )}
          </div>
        </div>

        {isSmallScreen && (
          <div className={`site__navigation ${isActive ? "menu__opend" : ""}`}>
            <div className="bg__menu h-100">
              <div className="menu__wrapper">
                <div className="menu__container p-3">
                  <ul className="the_menu">
                    <li className="menu_item">
                      <a onClick={handleLinkClick} href="#home" className="my-3">
                        Home
                      </a>
                    </li>
                    <li className="menu_item">
                      <a onClick={handleLinkClick} href="#about" className="my-3">
                        About me
                      </a>
                    </li>
                    <li className="menu_item">
                      <a onClick={handleLinkClick} href="#portfolio" className="my-3">
                        Project Experience
                      </a>
                    </li>
                    <li className="menu_item">
                      <a onClick={handleLinkClick} href="#eca" className="my-3">
                        ECA
                      </a>
                    </li>
                    <li className="menu_item">
                      <a onClick={handleLinkClick} href="#contact" className="my-3">
                        Contact me
                      </a>
                    </li>
                    <li className="menu_item">
                      <div onClick={handleToggle} className="my-3">
                        <Themetoggle />
                      </div>
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
