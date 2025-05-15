import {Route, Routes, useNavigate} from "react-router";
import Header from "../components/Header";
// import Reservation from "../components/Reservation";
import { useState, useReducer } from "react";
import ReservationConfirmation from "./ReservationConfirmation";
import ReservationForm from "./ReservationForm";

const Main = () => {

    const [reservationInfo, setReservationInfo] = useState({});

    const seedRandom = function(seed) {
        return function() {
            return Math.floor(Math.random() * 11 * (new Date()/seed));
        };
    };

    const fetchAPI = function(date) {
        let result = [];
        result.push("Select time");
        let random = seedRandom(date);
        for (let i=15; i<=22; i++) {
            if (random() < 5) {
                result.push(i + ":00");
            }
            if (random() > 5) {
                result.push(i + ":30");
            }
            if (random() > 9) {
                result.push(i + ":15");
            }
        };

        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };
    
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())};
    };

    const navigate = useNavigate();

    function submitForm(formData) {
       if (submitAPI(formData)) {
        navigate("/confirmation")
        };
    };

    return (
        <Routes>
            <Route 
                path = "/" 
                element={<Header  />}>
            </Route>
            <Route 
                path = "/reservation" 
                element={<ReservationForm 
                availableTimes = {state} 
                dispatch = {dispatch} 
                submitForm = {submitForm} 
                setReservationInfo = {setReservationInfo}
                reservationInfo = {reservationInfo} />}>
            </Route>
            <Route 
                path = "/confirmation" 
                element={<ReservationConfirmation  reservationInfo={reservationInfo} />}>
            </Route>
        </Routes>

    );
};

export default Main;