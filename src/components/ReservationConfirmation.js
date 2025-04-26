import bookLogo from "../images/Asset 14@4x.png";
import { Link } from "react-router-dom";

const ReservationConfirmation = (props) => {
    return (
        <section style={{display: 'grid', gridTemplateColumns: '1fr', justifyItems: 'center', margin: "0px 10%", padding: "2% 5%", border: "1px solid black"}}>
                        <img src={bookLogo} alt="Little Lemon" style={{width: "50%"}} />
                        <h1 style={{ fontSize: "2em"}}>Your table reservation is completed. See you soon</h1>
                        <Link to='/'>
      <button type="button" className="btn btn-info">OK</button>
      </Link>
        </section>
    )
};

export default ReservationConfirmation;