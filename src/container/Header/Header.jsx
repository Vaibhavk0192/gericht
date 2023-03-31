import React from "react";
import { SubHeading } from "../../components";

import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor"/>
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora expedita perferendis ratione, et, aliquid temporibus ab deserunt dolorem quo iste numquam tenetur laudantium voluptate.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
