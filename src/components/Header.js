// import React from 'react';
import { Link } from "react-router";
import headerPhoto from "../images/Littlelemon.jpg";
// import ReservationForm from "./ReservationForm";


const Header = () => {

    return (
        <header className='header'>
            <section >

                {/*header text*/}

                <div >
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>

                    {/*header photo*/}
                    <div className='header-img'>
                        <img src={headerPhoto} alt="Little Lemon welcome " />
                    </div>
                    <p >We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <Link to="/reservation"><button aria-label='Click me'>Reserve a Table</button></Link>
                </div>

                    {/*header photo*/}
                {/*<div className='header-img'>
                    <img src={headerPhoto} alt="Little Lemon welcome " />
                </div>*/}

            </section>
        </header>
    );
};

export default Header;