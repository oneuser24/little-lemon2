import { useState, useEffect } from "react";
import bookLogo from "../images/Asset 14@4x.png";


const ReservationForm = (props) => {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setCurrentDate(`${year}-${month}-${day}`);
    }, []);

    const [firstName, setFirstName] = useState({value: "", isTouched: false,});
    const [lastName, setLastName] = useState({value: "", isTouched: false,});
    const [date, setDate] = useState(currentDate);
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("1");
    const [seating, setSeating] = useState("standard");
    const [occasion, setOccasion] = useState("regular visit");

    const handleSubmit = (e) => {

        const formData = {
            name : firstName.value, 
            date: date, 
            time: times, 
            guests : guests, 
            seating : seating,
            occasion : occasion 
        };
        e.preventDefault();   
        props.setReservationInfo({
            name : firstName.value, 
            date: date, 
            time: times, 
            guests : guests, 
            seating : seating,
            occasion : occasion 
        });
        localStorage.setItem('reservationData', JSON.stringify(formData));
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section className="bookform-section">
                <img src={bookLogo} alt="Little Lemon" className="bookform-img" />
                <h1 className="bookform-title" >Table reservation form</h1>                
                    <form onSubmit = {handleSubmit} className="bookform">
                        {/*customer contact information*/}
                        <fieldset className="bookform-fieldset">
                            <legend className="bookform-legend">Your details<span style={{color: "red"}}>*</span></legend>
                                <div className="bookform-name-time">
                                    <div>
                                        <label htmlFor="first-name"></label>
                                        <input 
                                            id="first-name" 
                                            name="first-name" 
                                            type="text" 
                                            value={firstName.value}
                                            minLength="2"
                                            className="bookform-inputfield1"
                                            placeholder="First name" 
                                            border="1px solid black"
                                            onChange={(e) => setFirstName({...firstName, value: e.target.value})}
                                            onBlur={(e) => setFirstName({...firstName, isTouched: true})} 
                                            required 
                                        />
                                        {(firstName.value.length < 2 && firstName.isTouched) ? <p className="fieldError">Enter valid first name</p> : null}
                                    </div>
                                    <div>
                                        <label htmlFor="last-name"></label>
                                        <input 
                                            id="last-name" 
                                            name="last-name" 
                                            className="bookform-inputfield1"
                                            type="text" 
                                            value={lastName.value} 
                                            minLength="3"
                                            placeholder="Last name"  
                                            onChange={(e) => setLastName({...lastName, value: e.target.value})}
                                            onBlur={(e) => setLastName({...lastName, isTouched: true})}
                                            required
                                        />
                                        {(lastName.value.length < 3 && lastName.isTouched) ? <p className="fieldError">Enter valid last name</p> : null}
                                    </div>
                                </div>
                        </fieldset>

                        {/*select date and time*/}
                        <fieldset className="bookform-fieldset">
                        <legend className="bookform-legend">Select time<span style={{color: "red"}}>*</span></legend>
                            <div className="bookform-name-time">
                                <div>
                                    <label htmlFor="book-date">Date: </label><br></br>
                                    <input 
                                        id="book-date" 
                                        value={date} 
                                        className="bookform-inputfield1" 
                                        defaultValue={currentDate} 
                                        min={currentDate} 
                                        type="date" 
                                        onChange={(e) => handleChange(e.target.value)} 
                                        required 
                                    />                                    
                                </div>
                                <div>
                                    <label htmlFor="book-time" >Time: </label><br></br>
                                        <select 
                                        id="book-time" 
                                        name="book-time" 
                                        value={times} 
                                        onChange={(e) => setTimes((e.target.value !== "Select time") ? e.target.value : "")} 
                                        className="bookform-inputfield2" >                                            
                                            {
                                                props.availableTimes.availableTimes.map((availableTime) => (<option key ={availableTime.toString()}>{availableTime}</option>))
                                            }
                                        </select>
                                </div>
                            </div>
                        </fieldset>

                        {/*select table options*/}
                        <fieldset className="bookform-fieldset">
                        <legend className="bookform-legend">Select a table </legend>
                            <div className="bookform-table">
                                <div>
                                    <label htmlFor="book-seating">Seating: </label><br></br>
                                    <select 
                                        id="book-seating" 
                                        value={seating} 
                                        onChange={(e) => setSeating(e.target.value)} 
                                        className="bookform-inputfield2" 
                                    >
                                        <option value="standard">Standard</option>
                                        <option value="outdoor">Outdoor</option>
                                        <option value="counter">Counter</option>
                                        <option value="bar">Bar</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="book-guests">Guests: </label><br></br>
                                    <input 
                                        id="book-guests" 
                                        value={guests} 
                                        type="number" 
                                        min="1" 
                                        max="15" 
                                        onChange={(e) => setGuests(e.target.value)} 
                                        className="bookform-inputfield1" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="book-occasion">Occasion: </label><br></br>
                                    <select 
                                        id="book-occasion" 
                                        value={occasion} 
                                        onChange={(e) => setOccasion(e.target.value)} 
                                        className="bookform-inputfield2" 
                                    >
                                        <option value="" style={{color: "grey"}}>(optional)</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="dating">Date</option>
                                        <option value="aspecial">Special occasion</option>
                                        <option value="anniversary">Business meal</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>
                            <button
                                aria-label="On Click" 
                                className = "btnReserve" 
                                value = "submit" 
                                disabled = {!firstName || firstName.length < 2 || !lastName || lastName.length < 3 || !date || !times }>
                                    Confirm reservation
                            </button>
                </form>
            </section>
        </header>
    );
};

export default ReservationForm;