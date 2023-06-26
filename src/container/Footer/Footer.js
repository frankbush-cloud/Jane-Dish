import React from "react";

import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__openSans">9 w 53rd Street 10091, Kenya</p>
        <p className="p__openSans">+254 -728110299</p>
        <p className="p__openSans">+254 726289097</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__openSans">
          The best way to find oneself is to loose yourself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ margin: "15px" }}
        />

        <div className="app__footer_links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working hours</h1>
        <p className="p__openSans">Monday-Friday</p>
        <p className="p__openSans">08.00AM - 12.Am</p>
        <p className="p__openSans">Saturday-Sunday</p>
        <p className="p__openSans">07.00AM - 11.00Am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__openSans">2021 JaneBush. All Rights</p>
    </div>
  </div>
);

export default Footer;
