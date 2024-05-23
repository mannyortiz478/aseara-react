import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Aseara
            </p>
            <p className="ft-description">
            Aseara is insured and registered in Pennsylvania and Delaware. 
            Aseara staff bring over ten years of experience. 
            Aseara is a company in which you can trust.
            </p>
          </div>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Contact Us Today!</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:info@asearacleaning.com">
               info@asearacleaning.com
              </a>
            </li>
            <li>
              <a href="tel:484 727 8581">(484)-727-8581</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 All rights reserved.</p>

      </div>
    </div>
  );
}

export default Footer;
