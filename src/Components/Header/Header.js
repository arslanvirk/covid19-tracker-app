import React, { PureComponent } from 'react';
import './Header.css'
import logo from '../../Images/logo.png';

function Header() {
    return (
        <header className="App-header">
          <img src={logo} className="image" alt="logo" />
          <span style={{fontWeight: "bolder", fontfamily: "auto"}}> Tracker</span>
        </header>
    );
  }
  
  export default Header;