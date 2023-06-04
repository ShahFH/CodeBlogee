import React, { useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const handleNavToggle = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    return (
      <header className="App ">
        <nav className={isNavOpen ? 'navbar open' : 'navbar'}>
          <div className="nav-brand">C<span className="jump">⭕</span>Bloge</div>
          <button className="nav-toggle" onClick={handleNavToggle}>
            Menu
          </button>
          <ul className="nav-menu">
            <li className="nav-item">
            <Link to={'/'}>
              Home
            </Link>
            </li>
            <li className="nav-item">
            <Link to={'/About'}>
            About
            </Link>
            </li>
            <li className="nav-item">
            <Link to={'/Articles'}>
            articles
            </Link>
            </li>
            <li className="nav-item">
            <Link to={'/Footer'}>
              Contact
            </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Navbar;