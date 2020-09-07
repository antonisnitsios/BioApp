import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <nav class="nav">
		<ul>
			<a class="active" href="#"><i class="fa fa-home"></i></a>
		</ul>
	  </nav>
    );
  }
}

export default Menu;