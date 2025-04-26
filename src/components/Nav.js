import logo from '../images/logo1.png';
import { useState } from "react";

const underConstruction = (e) => {
    e.preventDefault();
    window.Swal.fire({
        icon: "error",
        title: "Under construction",
        text: "Visit this page later",
        footer: false
      });
}

const Nav = () => {

    const handleClick = (anchor) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

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
            <li><a href = "#about" onClick = {handleClick('about')}>About</a></li>
            <li><a href = "#online-menu" onClick = {handleClick('online-menu')}>Menu</a></li>
            <li><a href = " /reservation">Reservations</a></li>
            <li><a href = "#online-menu" onClick = {handleClick('online-menu')}>Order online</a></li>
            <li><a href = " /" onClick={(e)=>underConstruction(e)}>Login</a></li>
        </ul>
    </nav>
    );
};

export default Nav;