import React from 'react';
import logo from '../../Resoureces/Images/Resturent.jpg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/offers">Offers</a>
                <a href="/order">Order</a>
                <a href="/about">About us</a>
            </div>
        </nav>
    );
};

export default Header;