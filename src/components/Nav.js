import logo from '../images/logo1.png';
import { useState } from "react";

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>

        <a href = " /">
        <img src={logo} style = {{width : '200px'}} alt = 'little lemon logo' />
        </a>

        {/* mobile navigation */}

        <div className='menu-icon' onClick={toggleMenu}>
            <div className='hbar'> </div>
            <div className='hbar'> </div>
            <div className='hbar'> </div>
        </div>


        {/* desktop navigation */}
        
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li><a href = " /">Home</a></li>
            <li><a href = " /">About</a></li>
            <li><a href = " /">Menu</a></li>
            <li><a href = " /">Reservations</a></li>
            <li><a href = " /">Order online</a></li>
            <li><a href = " /">Login</a></li>
        </ul>
    </nav>
    );
};

export default Nav;