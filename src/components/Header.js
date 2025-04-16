import React from 'react';
import logoImage from '../images/logo1.png';
import Nav from '../components/Nav';

function Header() {



    return (
        <div style = {{display: 'flex', flexFlow : 'row nowrap', alignItems : 'center', height: '10vh', margin: '0px 0px'}}>
            <img src={require('../images/logo1.png')} style = {{display: 'block', marginRight: '40px', border: '1px solid black', maxWidth :'200px', minWidth: '80px'}} alt="Little Lemon Logo" />
            <Nav message = "New navigation" />
        </div>
    );
};

export default Header;