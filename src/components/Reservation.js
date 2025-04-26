import ReservationForm from "./ReservationForm";

const Reservation = (props) => {

    return (
        <ReservationForm availableTimes = {props.availableTimes} dispatch = {props.dispatch} submitForm = {props.submitForm} />
    );
};

export default Reservation;