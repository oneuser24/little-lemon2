import bookLogo from "../images/Asset 14@4x.png";
import { Link } from "react-router-dom";

const ReservationConfirmation = (props) => {
    return (
        <section className="confirmation-message">
                        <img src={bookLogo} alt="Little Lemon" className="bookform-img" />
                        <h1 className="bookform-title">Table reservation is completed. See you soon</h1>
                        <Link to='/'>
      <button type="button" className="btn btn-info">OK</button>
      </Link>
        </section>
    )
};

export default ReservationConfirmation;