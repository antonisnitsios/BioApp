import React, { Component } from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

class Footer extends Component {

  render() {
    return (
      <footer>
		<div id="cop">@Antonis Nitsios</div>
		<h6>ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</h6>
		<ul>
		<li>Νήτσιος Αντώνιος</li>
		<li>ant.nhtsios@gmail.com</li>
		<li>6980160415</li>
		</ul>
	  </footer>
    );
  }
}

export default Footer;