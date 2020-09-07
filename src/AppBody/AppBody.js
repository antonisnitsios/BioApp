import React, { Component } from 'react';
import './AppBody.css';
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 


class AppBody extends Component {
	render() {
		return (
				<div className="container">
				<h3><b><i>ΓΝΩΣΕΙΣ</i></b></h3>
					<div className="row">
						<div className="col-md-3 col-sm-4 portfolio-item" id="skill1">
						<button className="btn btn-info btn-lg">
							<h5>WEB DEVELOPMENT/WEB DESIGN</h5>	
						</button>   
						<b><p>PHP & Laravel, Composer, MySQL, JavaScript, React.js, npm, Wordpress, CSS3, HTML5, Bootstrap, Object Oriented Programming, Relational Databases, MVC Architecture, JSON, XML, 
							REST APIs, Java & Spring MVC Framework(in progress), Website Maintenance & Configuration.</p></b>
						</div>
						<div className="col-md-3 col-sm-4 portfolio-item" id="skill2">
						<button to="/laravel" className="btn btn-info btn-lg">
							<h5>LARAVEL ENTHOUSIAST/EXPERT</h5>
						</button>
						<b><p>Create projects & apps with Laravel Framework using Composer, MVC Architecture ,Eloquent ORM, Authentication, Bootstrap, CSS, Jquery, migration DB, 
							MySQL, Redis Cache, XAMPP, REST APIs, JSON Responses and import public APIs & providers on projects.</p></b>
						</div>
						<div className="col-md-3 col-sm-4 portfolio-item" id="skill3">
						<button to="/projects" className="btn btn-info btn-lg">
							<h5>CREATOR OF PROJECTS/WEBSITES</h5>
						</button>
						<b><p>UsedLaptops(PHP, MySQL, Javascript, HTML, CSS)</p>
						<p>RadioWebsite(Laravel, MySQL, Eloquent ORM, HTML5, Bootstrap, CSS3, JQuery)</p>
						<p>My Bio App(React.js, Redux, JSX, CSS3, Bootstrap, HTML)</p>
						<p>JavaCalculator(Java, Java Swing)</p></b>
						</div>
						<div className="col-md-3 col-sm-4 portfolio-item" id="skill4">
						<button to="/itskills" className="btn btn-info btn-lg">
							<h5>ANOTHER TECHNICAL SKILLS</h5>
						</button>
						<b><p>Technical Support Skills such as:
							Hardware Problem Solving, Network Diagnostics, Router & Switch Parameterisation, Printer Support, Windows & Linux Command Line, Operating Systems(Windows 7,8,10,
							Ubuntu), IDEs(Netbeans, Eclipse) Basic Knowledge of Android Development, Analytical Skills, Relational Databases, JavaFX, Git & Github, GoogleMaps API.</p></b>
						</div>
					</div>
					<br></br>
					<br></br>
				</div>
		);
	} 
}

export default AppBody;
