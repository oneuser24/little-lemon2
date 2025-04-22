import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import headerPhoto from "../images/Littlelemon.jpg";
import Reservation from "../components/Reservation";

const Header = () => {



    return (
        <header className='header'>
            <section>

                {/*header text*/}

                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <Link to="/reservation"><button>Reserve a Table</button></Link>
                </div>
                    <Routes> 
                        <Route path="/reservation" element={<Reservation />}></Route>
                    </Routes>

                {/*header photo*/}

                <div className='header-img'>
                    <img src={headerPhoto} alt="Little Lemon welcome photo" />
                </div>
            </section>
        
        </header>
    );
};

export default Header;