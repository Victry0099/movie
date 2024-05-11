import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
          <li className="menuItem"></li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore minima totam perferendis quas ullam voluptas, tenetur autem ducimus, nemo voluptatem molestias cumque quaerat minus. Dolores vero natus eligendi eaque quas! Obcaecati esse quis repellendus quibusdam, fuga aperiam aspernatur error quod cumque veritatis sed eum alias quos nostrum deserunt culpa.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebook/>
          </span>
          <span className="icon">
            <FaInstagramSquare/>
          </span>
          <span className="icon">
            <FaTwitter/>
          </span>
          <span className="icon">
            <FaLinkedinIn/>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
