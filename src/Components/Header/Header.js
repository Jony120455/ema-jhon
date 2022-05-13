import React from 'react';
import logo from '../../images/ema-john.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='img'>
          <img src={logo} alt="" />
          </div>
          <nav className='navbar'>
              <a href="/shop">Shop</a>
              <a href="/order">Order</a>
              <a href="/inventory">Manage Inventory</a>
          </nav>
        </div>
    );
};

export default Header;