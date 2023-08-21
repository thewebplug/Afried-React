import React from "react";
import Logo from "../img/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_flex">
        <div>
            <LazyLoadImage
                className="logo"
                effect="blur"
                alt="Vinea Global"
                src={Logo}
            />
            <div className="footer_info">
            Email: enquiry@vineaglobal.com
            </div>
            <div className="footer_info">
            Phone: +2348090184333
            </div>
            <div className="footer_info">
                Office Hours: 9:00am - 5:00pm
            </div>
        </div>
        <div>
            <div className="footer_title">
                Services
            </div>
            <div className="footer_subtitle">
                <Link to="/" className="footer_subtitle">
                Home
                </Link>
            </div>
            <div className="footer_subtitle">
            <Link to="/about" className="footer_subtitle">
                About us
                </Link>
            </div>
            <div className="footer_subtitle">
                 <Link to="/services" className="footer_subtitle">
                Our services
                </Link>
            </div>
            <div className="footer_subtitle">
                 <Link to="/partners" className="footer_subtitle">
                Partners
                </Link>
            </div>
            <div className="footer_subtitle">
                 <Link to="/blog" className="footer_subtitle">
                Blog
                </Link>
            </div>
        </div>
        <div>
            <div className="footer_title">
                The Company
            </div>
            <div className="footer_subtitle">
                 <Link to="/contact" className="footer_subtitle">
                Contact Us
                </Link>
            </div>
            <div className="footer_subtitle">
                Privacy Policy
            </div>
            <div className="footer_subtitle">
                Term & Conditions
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
