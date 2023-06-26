import React from "react";

import "./Chef.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse ">
      <img src={images.Jane} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">what we Believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__openSans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p className="kevin">Jane Bush</p>
        <p className="p__openSans">chef & Founder</p>
        <img
          src={images.sign}
          alt="sign
        "
        />
      </div>
    </div>
  </div>
);

export default Chef;
