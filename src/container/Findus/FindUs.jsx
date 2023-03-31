import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contect">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, amet?
        </p>
        <p className="p__opensans" style={{ color: "#DCCA87",margin:'2rem 0' }}>
          Opening Hours
        </p>
        <p className="p__opensans">
          Mon-Fri 10:00 AM - 11:00 PM
        </p>
        <p className="p__opensans">Sat-Sun 9:00 AM - 1:00 AM
        </p>
        
      </div>
      <button className="custom__button" type="button" style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
