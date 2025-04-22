import { useState } from "react";


const ReservationForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("1");
    const [seating, setSeating] = useState("standard");
    const [occasion, setOccasion] = useState("regular");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <h1>Table reservation form</h1>
                    <form onSubmit = {handleSubmit}>
                        {/*customer contact information*/}
                        <fieldset>
                            <legend>Customer</legend>
                                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
                                    <div>
                                        <label htmlFor="first-name">First name: </label><br></br>
                                        <input id="first-name" name="last-name" type="text" value={firstName} minLength="3" onChange={(e) => setFirstName(e.target.value)} required />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name">Last name: </label><br></br>
                                        <input id="last-name" name="last-name" type="text" value={lastName} minLength="3" onChange={(e) => setLastName(e.target.value)} required />
                                    </div>
                                </div>
                        </fieldset>

                        {/*select date and time*/}
                        <fieldset>
                        <legend>Select time</legend>
                            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
                                <div>
                                    <label htmlFor="book-date">Date: </label><br></br>
                                    <input id="book-date" value={date} type="date" onChange={(e) => handleChange(e.target.value)} required />                                    
                                </div>
                                <div>
                                    <label htmlFor="book-date">Time: </label><br></br>
                                        <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required >
                                            <option>Select time</option>
                                            {/*
                                                props.availableTimes.availableTimes.map(availableTimes => {<option key ={availableTimes}>{availableTimes}</option>})
                                            */}
                                        </select>
                                </div>
                            </div>
                        </fieldset>

                        {/*select table options*/}
                        <fieldset >
                        <legend >Select a table</legend>
                            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
                                <div>
                                    <label htmlFor="book-seating">Seating options: </label><br></br>
                                    <select id="book-seating" value={seating} onChange={(e) => setSeating(e.target.value)} required >
                                        <option value="standard">Standard</option>
                                        <option value="outdoor">Outdoor</option>
                                        <option value="counter">Counter</option>
                                        <option value="bar">Bar</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="book-guests">Number of guests: </label><br></br>
                                    <input id="book-guests" value={guests} type="number" min="1" max="15" onChange={(e) => setGuests(e.target.value)} required />
                                </div>
                                <div>
                                    <label htmlFor="book-occasion">Occasion: </label><br></br>
                                    <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required >
                                        <option value="regular"></option>
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>
                        <button value = "submit" style = {{width: '100%'}} disabled = {!firstName || firstName.length < 3 || !lastName || lastName.length < 3 || !date || !times}>Make a reservation</button>
                </form>
            </section>
        </header>
    );
};

export default ReservationForm;