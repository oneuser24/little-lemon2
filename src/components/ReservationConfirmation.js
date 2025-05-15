import bookLogo from "../images/Asset 14@4x.png";
import { Link } from "react-router";

const ReservationConfirmation = ({reservationInfo}) => {
    return (
        <section className="confirmation-message">
                        <img src={bookLogo} alt="Little Lemon" className="bookform-img" />
                        <h1 className="booking-confirm">Your table reservation is complete, see you soon</h1>
                        <h2>Reservation details: </h2>
                        <ul className="booking-details">
                            <li><b>Customer:</b> {reservationInfo.name}</li>
                            <li><b>Date:</b> {reservationInfo.date}</li>
                            <li><b>Time:</b> {reservationInfo.time}</li>
                            <li><b>Number of guests:</b> {reservationInfo.guests}</li>
                            <li><b>Seating:</b> {reservationInfo.seating}</li>
                            <li><b>Occasion:</b> {reservationInfo.occasion}</li>
                        </ul>
                        <Link to='/'>
                            <button type="button" className="btnConf">OK</button>
                        </Link>
        </section>
    )
};

export default ReservationConfirmation;