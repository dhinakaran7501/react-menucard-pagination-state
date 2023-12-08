import React from "react";
import "./header.css";

const Header = ({ shopName, menuTitle, description }) => {
  return (
    <div className="header">
      <div className="title">
        <p>{shopName}</p>
      </div>
      <div className="menu-title">
        <h4>{menuTitle}</h4>
      </div>
      <div className="menu-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Header;
