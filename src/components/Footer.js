import footerLogo from "../images/footerLogo3.png";
import faFacebook from "../images/facebookLogo1.png";
import faInsta from "../images/instagramLogo1.png";

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
            <section style = {{display: 'flex', flexFlow: "row", flexWrap: "wrap",
                justifyContent: "space-between", 
                padding: "1em 15%", background : '#495E57', margin : '0px 0%', color: "white"}}>
                <img src={footerLogo} alt="Little Lemon"  style={{height:'15em', padding: "1em 0"}} />
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
                 <div style={{display: "flex", flexFlow: "column", gap: "20px", padding: "1em 0"}}>
                    <a href="https://www.facebook.com/"><img src={faFacebook} height={64} alt="facebook social media " /></a>
                    <a href="https://www.instagram.com/"><img src={faInsta} height={64} alt="facebook social media " /></a>
                </div>
            </section>
        <section 
            style={{display:"flex",
                background: "#333", 
                padding: "1em 0px", 
                color: "#F4CE14", 
                fontSize:"14pt", 
                justifyContent:"center",
                alignItems:"center"}}>
                    Developer © 2025 Little Lemon. All rights reserved
        </section>
        </footer>
    )
};

export default Footer;