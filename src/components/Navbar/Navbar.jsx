import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import images from "../../constants/images";

export function Navbar() {
  const [isHover, setIsHover] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const Links = [
    {
      linkName: "Home",
      className: "p__openSans",
      href: "#home",
    },
    {
      linkName: "About",
      className: "p__openSans",
      href: "#about",
    },
    {
      linkName: "Menu",
      className: "p__openSans",
      href: "#menu",
    },
    {
      linkName: "Awards",
      className: "p__openSans",
      href: "#awards",
    },
    {
      linkName: "Contact",
      className: "p__openSans",
      href: "#contact",
    },
  ];

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo ">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        {Links.map((link) => (
          <li
            className={isHover ? "tracking-in-expand" : link.className}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <a href={link.href}>{link.linkName}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__openSans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__openSans">
          Book table
        </a>
      </div>

      <div className="app__nav-bar-smallscreen">
        <GiHamburgerMenu
          color="white"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-btm">
            <RiCloseLine
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links rotate-center">
              {Links.map((link) => (
                <li
                  className={isHover ? "tracking-in-expand" : link.className}
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                >
                  <a href={link.href}>{link.linkName}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
