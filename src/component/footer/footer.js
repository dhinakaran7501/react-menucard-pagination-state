import React from "react";
import "./footer.css";

const Footer = () => {
  let currentHour = new Date().getHours();
  let openHour = 12;
  let closingHour = 22;

  if (currentHour >= openHour && currentHour <= closingHour) {
    return (
      <div className="footer">
        <div className="footer-content">
          <p>
            We are happy to welcome you between {openHour}:00 PM and{" "}
            {closingHour}
            :00 PM
          </p>
        </div>
        <div className="footer-bar"></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="footer-content">
          <p>
            The Shop has been closed at {closingHour}:00 PM. It will Open at{" "}
            {openHour}:00 PM.
          </p>
        </div>
        <div className="footer-bar"></div>
      </div>
    );
  }
};

export default Footer;
