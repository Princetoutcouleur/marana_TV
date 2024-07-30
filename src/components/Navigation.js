import React, { useEffect, useState } from "react";
import logo from "../Assets/img/logo-blanc.png";
import { FaBarsStaggered } from "react-icons/fa6";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;

      if (offset > windowHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="navigation">
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "scrolled" : "bg-transparent"
        }`}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" className="navbar-logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBarsStaggered className="text-white fs-3" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item fw-bold fs-5">
                <a class="nav-link text-white " href="#mode">
                  Mode
                </a>
              </li>
              <li class="nav-item fw-bold fs-5">
                <a class="nav-link text-white" href="#beauty">
                  Bien être
                </a>
              </li>
              <li class="nav-item fw-bold fs-5">
                <a class="nav-link text-white" href="#life">
                  Vie sociale
                </a>
              </li>
              <li class="nav-item fw-bold fs-5">
                <a class="nav-link text-white" href="#talkShow">
                  Sumu-Talkshow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
