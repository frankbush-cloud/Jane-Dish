import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper__content">
        <p className="p__openSans">Lane Ends Bungalow, whatcroft Hall</p>
        <p className="p__cormorant" style={{ color: "#DCCA87", margin: "2rem 0" }}>
          Opening Hours
        </p>
        <p className="p__openSans">Mon-friday: 10:00am - 02:00 am</p>
        <p className="p__openSans">Sat-sun: 10:00am - 03:00 am</p>
      </div>
      <button className="custom__button">Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
