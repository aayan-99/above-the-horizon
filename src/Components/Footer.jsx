import React from "react";
import "./FooterStyles.css";

import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
                <FaSearchLocation size={20} style={{ color: "#ffffff", marginRight: "2rem" }}/>
                <div>
                <p>123 Acme St.</p>
                <h4>Houston, Texas.</h4>
                </div>
          </div>
          <div className="phone">
                <h4>
                    <FaPhone size={20} style={{ color: "#ffffff", marginRight: "2rem" }}/>1-800-123-1234
                </h4>
          </div>
          <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{ color: "#ffffff", marginRight: "2rem" }}/>trips@galaxy.com
                </h4>
          </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, tempore sapiente id sequi totam esse alias tempora.
                Aliquid dolorem at ab, voluptatum est, facilis ipsa error sunt
                pariatur voluptatem culpa! Ipsa similique, enim tempore ipsam porro
                sapiente consequatur aliquid facere.
            </p>
            <div className="icons">
                <FaFacebook size={30} style={{ color: "#ffffff", marginRight: "1rem" }}/>
                <FaTwitter size={30} style={{ color: "#ffffff", marginRight: "1rem" }}/>
                <FaLinkedin size={30} style={{ color: "#ffffff", marginRight: "1rem" }}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
