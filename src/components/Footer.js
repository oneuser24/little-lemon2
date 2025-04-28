import footerLogo from "../images/footerLogo3.png";
import faFacebook from "../images/facebookLogo1.png";
import faInsta from "../images/instagramLogo1.png";
import faPinterest from "../images/pinterestLogo.png";

const underConstruction = (e) => {
    e.preventDefault();
    window.Swal.fire({
        icon: "error",
        title: "Under construction",
        text: "Visit this page later",
        footer: false
      });
}

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

function Footer() {
    return (
        <footer >
            <section className="footer-content">
                <img src={footerLogo} alt="Little Lemon"  className="footer-img" />
                <div>
                    <h4>Links</h4>
                    <ul className="foot-nav-links">
                        <li><a href = " /">Home</a></li>
                        <li><a href = "#about" onClick = {handleClick('about')}>About</a></li>
                        <li><a href = "#online-menu" onClick = {handleClick('online-menu')}>Menu</a></li>
                        <li><a href = " /reservation">Reservations</a></li>
                        <li><a href = "#online-menu" onClick = {handleClick('online-menu')}>Order online</a></li>
                        <li><a href = " /" onClick={(e)=>underConstruction(e)}>Login</a></li>
                    </ul>
                </div>
                <div >
                    <h4>Address</h4>
                    <p>123 Main Street</p>
                    <p> Chicago, IL 60654</p>
                    <h4>Phone</h4>
                    <p>(312) 123-4567</p>
                    <h4>Email</h4>
                    <p>little@lemon.com</p>                    
                </div>
                <div>
                    <h4>Hours</h4>
                    <p>08 am - 11 pm Monday - Friday </p>
                    <p>10 am - 10 pm Saturday & Sunday</p>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com/"><img src={faFacebook} height={64} alt="facebook social media " /></a>
                    <a href="https://www.instagram.com/"><img src={faInsta} height={64} alt="facebook social media " /></a>
                    <a href="https://www.pinterest.com/"><img src={faPinterest} height={64} alt="pinterest social media " /></a>
                </div>
            </section>
            <section className="footer-copyright" >
                    Developer © 2025 Little Lemon. All rights reserved
        </section>
        </footer>
    )
};

export default Footer;