import { useEffect, useRef, useState } from "react";
import logo from '../images/logo1.png';

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

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - prevScrollY.current) < 10) {
      return;
    }

    if (currentScrollY > prevScrollY.current) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`} 
        style={{transform: `translateY(${isHeaderVisible ? 0 : "-100%"})`,
        backgroundColor: `${!isHeaderVisible ? "transparent" : "#ffffff"}`,
        position: "fixed", top: "0", left: "0", right: "0"
        
        }}
         >




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
        
        <ul className={`nav-links ${(menuOpen && window.innerWidth < 768) ? "visible" : ""}`}>
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