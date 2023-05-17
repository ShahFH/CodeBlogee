import React, { useState } from 'react';
import '../style.css';


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const handleNavToggle = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    return (
      <header className="App">
        <nav className={isNavOpen ? 'navbar open' : 'navbar'}>
          <div className="nav-brand">C<span className="jump">⭕</span>Bloge</div>
          <button className="nav-toggle" onClick={handleNavToggle}>
            Menu
          </button>
          <ul className="nav-menu">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">articles</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Navbar;