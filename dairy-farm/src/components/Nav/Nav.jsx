// Nav.js
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header>
      <div className="container">
        <div className="item-1">
          <h2>SARAVANA DAIRY FARM</h2>
        </div>
        <div className="item-2">
          <button className="menu-button" onClick={toggleMenu}>
            &#9776;
          </button>
          <nav className={`nav-bar ${isOpen ? 'open' : ''}`}>
            <Link to="/home">HOME</Link>
            <Link to="/product">PRODUCT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/about">ABOUT</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

