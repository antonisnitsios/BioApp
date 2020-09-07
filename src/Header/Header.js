import React, { Component } from 'react';
import img from './antonis.jpg';
import './Header.css';

class Header extends Component {
  render() {
    return (
	  <img src={img} alt="Νήτσιος Αντώνιος"/>
	);
  }
}

export default Header;