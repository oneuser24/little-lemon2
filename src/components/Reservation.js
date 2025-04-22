import ReservationForm from "./ReservationForm";

const Reservation = (props) => {

    return (
        <ReservationForm availableTimes = {props.availableTimes} dispatch = {props.dispatch} SubmitForm = {props.SubmitForm} />
    );
};

export default Reservation;