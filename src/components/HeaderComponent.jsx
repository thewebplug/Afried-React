import React, { useEffect } from "react";
import Logo from "../img/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import '../styles/Header.css'
import { useNavigate, Link } from "react-router-dom";

function Header({noLogin}) {
  const navigate = useNavigate()

  useEffect(() => {
    const headerSidebar = document.querySelector('.header_sidebar')
    const headerHamburger = document.querySelector('.header_hamburger')
    const close = document.querySelector('.side_bar-close-icon')

    headerHamburger.addEventListener('click', () => {
      headerSidebar.classList.remove('none')
    })
    close.addEventListener('click', () => {
      headerSidebar.classList.add('none')
    })

  }, [])


  return (
      <header className="header">
        <div className="header_flex">
       <svg
              className="header_hamburger"
              width="24"
              height="18"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H18V2H0V0ZM0 5H18V7H0V5ZM0 10H18V12H0V10Z"
                fill="black"
              />
            </svg>
          <LazyLoadImage
            className="header_logo"
            effect="blur"
            alt="Vinea Global"
            src={Logo}
          />
          </div>

          <Link className="desktop" to="/"><div className="desktop">Home</div></Link>
          <Link className="desktop" to="/about"><div className="desktop">About us</div></Link>
          <Link  className="desktop"to="/services"><div className="desktop">Our services</div></Link>
          <Link  className="desktop"to="/partners"><div className="desktop">Partners</div></Link>
          <Link  className="desktop"to="/blog"><div className="desktop">Blogs</div></Link>
          <Link  className="desktop"to="/contact"><div className="desktop">Contact Us</div></Link>
      
    <div className="header_flex desktop-mid">
            {!noLogin && <button
              href="/"
              target="_blank"
              rel="noreferrer"
              className="header_button login"
              onClick={() => navigate('/login')}
            >
              Log in
            </button>}
            {!noLogin && <button
              href="/"
              target="_blank"
              rel="noreferrer"
              className="header_button-trans"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>}
            </div>
          <div className="header_sidebar none">
          <div className="side_bar-close">
            <svg
              className="side_bar-close-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          </div>
          <Link className="header_sidebar-title" to="/"><div className="header_sidebar-title">Home</div></Link>
          <Link className="header_sidebar-title" to="/about"><div className="header_sidebar-title">About us</div></Link>
          <Link  className="header_sidebar-title"to="/services"><div className="header_sidebar-title">Our services</div></Link>
          <Link  className="header_sidebar-title"to="/partners"><div className="header_sidebar-title">Partners</div></Link>
          <Link  className="header_sidebar-title"to="/blog"><div className="header_sidebar-title">Blogs</div></Link>
          <Link  className="header_sidebar-title"to="/contact"><div className="header_sidebar-title">Contact Us</div></Link>
          <div className="header_flex mobile">
            {!noLogin && <button
              href="/"
              target="_blank"
              rel="noreferrer"
              className="header_button login"
              onClick={() => navigate('/login')}
            >
              Log in
            </button>}
            {!noLogin && <button
              href="/"
              target="_blank"
              rel="noreferrer"
              className="header_button-trans"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>}
            </div>
          </div>
      </header>
  );
}
export default Header;
