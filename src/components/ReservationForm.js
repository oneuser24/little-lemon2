import { useState } from "react";
import bookLogo from "../images/Asset 14@4x.png";


const ReservationForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("1");
    const [seating, setSeating] = useState("standard");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section style={{display: 'grid', gridTemplateColumns: '1fr', justifyItems: 'center', margin: "0px 10%", padding: "2% 5%", border: "1px solid black"}}>
                <img src={bookLogo} alt="Little Lemon" style={{width: "50%"}} />
                <h1 style={{ fontSize: "2em"}}>Table reservation form</h1>                
                    <form onSubmit = {handleSubmit} style={{width: "100%"}}>
                        {/*customer contact information*/}
                        <fieldset>
                            <legend>Your details</legend>
                                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", columnGap: "3%"}}>
                                    <div>
                                        <label htmlFor="first-name"></label>
                                        <input 
                                            id="first-name" 
                                            name="first-name" 
                                            type="text" 
                                            value={firstName}
                                            minLength="3"
                                            style={{height: "2em", width: "100%", borderRadius: "0.3em", fontSize: '1em' }}
                                            placeholder="First name" 
                                            border="1px solid black"
                                            onChange={(e) => setFirstName(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name"></label>
                                        <input 
                                            id="last-name" 
                                            name="last-name" 
                                            type="text" 
                                            value={lastName} 
                                            minLength="3"
                                            style={{height: "2em", borderRadius: "0.3em", fontSize: '1em' }}
                                            placeholder="Last name"  
                                            onChange={(e) => setLastName(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                        </fieldset>

                        {/*select date and time*/}
                        <fieldset>
                        <legend>Select time</legend>
                            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", columnGap: "3%"}}>
                                <div>
                                    <label htmlFor="book-date">Date: </label><br></br>
                                    <input id="book-date" value={date} min={new Date().toISOString().split('T')[0]} type="date" onChange={(e) => handleChange(e.target.value)} required />                                    
                                </div>
                                <div>
                                    <label htmlFor="book-time">Time: </label><br></br>
                                        <select id="book-time" name="book-time" value={times} onChange={(e) => setTimes(e.target.value)}  >
                                            <option value="">Select time</option>
                                            {
                                                props.availableTimes.availableTimes.map((availableTimes) => (<option key ={availableTimes.toString()}>{availableTimes}</option>))
                                            }
                                        </select>
                                </div>
                            </div>
                        </fieldset>

                        {/*select table options*/}
                        <fieldset >
                        <legend >Select a table</legend>
                            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", columnGap: "3%"}}>
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
                                    <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                                        <option value="" style={{color: "grey"}}><span style={{color: "grey"}}>(optional)</span></option>
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
                                className = "btnReserve" 
                                value = "submit" 
                                style = {{width: '100%'}} 
                                disabled = {!firstName || firstName.length < 3 || !lastName || lastName.length < 3 || !date }>
                                    Confirm reservation
                            </button>
                </form>
            </section>
        </header>
    );
};

export default ReservationForm;