import React, { Component } from 'react';
import './MyData.css';

class MyData extends Component {

  render() {
    return (
		<div className="container">
		<h3><b><i>ΣΤΟΙΧΕΙΑ</i></b></h3>
			<div className="row">
				<div className="col-md-3 col-sm-4 portfolio-item">
					<button className="btn btn-info btn-lg">ΕΚΠΑΙΔΕΥΣΗ/ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΕΜΠΕΙΡΙΑ</button>
					<ul>
						<li><div id="on">2015-εν ενεργεία:</div> Τ.Ε.Ι. Θεσσαλίας-Τμήμα Μηχανικών Πληροφορικής</li>
						<li><div id="on">2017-2019:</div> Κατεύθυνση Software Engineering/Development-Τμήμα Μηχανικών Πληροφορικής Τ.Ε.Ι. Θεσσαλίας</li>
						<li><div id="on">2019-2020:</div> Πρακτική Άσκηση-IT Support Engineer</li>
						<li><div id="on">2017-εν ενεργεία:</div> Junior Software Developer(self employed)</li>
				    </ul>
				</div>
				<div className="col-md-3 col-sm-4 portfolio-item">
					<button className="btn btn-info btn-lg">ΠΡΟΣΩΠΙΚΑ ΣΤΟΙΧΕΙΑ/ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</button>
					<ul>
						<li><div id="on">ΟΝΟΜΑΤΕΠΩΝΥΜΟ:</div> Αντώνης Νήτσιος</li>
						<li><div id="on">EMAIL:</div> ant.nhtsios@gmail.com</li>
						<li><div id="on">ΤΗΛΕΦΩΝΟ:</div> 6980160415</li>
						<li><div id="on">ΗΛΙΚΙΑ:</div> 23 ετών-Ημερομηνία Γέννησης(04/07/1997)</li>
						<li><div id="on">FACEBOOK:</div> <a href="https://www.facebook.com/profile.php?id=100004197436987">Αντώνης Νήτσιος(Facebook)</a></li>
						<li><div id="on">LINKEDIN:</div> <a href="linkedin.com/in/antonis-nitsios-a4a30114a">Antonis Nitsios(Linkedin)</a></li>
					</ul>
				</div>

				<div className="col-md-3 col-sm-4 portfolio-item">
					<button className="btn btn-info btn-lg">ΕΝΔΙΑΦΕΡΟΝΤΑ/HOBBIES/ΚΑΘΗΜΕΡΙΝΑ ΘΕΜΑΤΑ ΑΠΑΣΧΟΛΗΣΗΣ</button>
					<ul>
						<li>Προγραμματισμός</li>
						<li>Αθλητικά</li>
						<li>Τεχνολογικά νέα, reviews, unboxings</li>
						<li>Γυμναστική</li>
						<li>Διάβασμα βιβλίων</li>
						<li>Παρακολούθηση βίντεο-μαθημάτων</li>
						<li>Ταινίες</li>
						<li>Ηλεκτρονικά παιχνίδια</li>
					</ul>
				</div>

				<div className="col-md-3 col-sm-4 portfolio-item">
					<button className="btn btn-info btn-lg">ΠΗΓΕΣ ΓΝΩΣΕΩΝ ΚΑΙ ΕΠΙΛΥΣΗΣ ΠΡΟΒΛΗΜΑΤΩΝ</button>
						<ul>
							<li><a href="https://www.w3schools.com/">W3Schools</a></li>
							<li><a href="https://www.coursera.org/">Coursera</a></li>
							<li><a href="https://www.udemy.com/">Udemy</a></li>
							<li><a href="https://morioh.com/">Morioh</a></li>
							<li><a href="https://www.youtube.com/">Youtube</a></li>
							<li><a href="https://www.traversymedia.com/">Traversy Media</a></li>
							<li><a href="https://www.codechef.com/">CodeChef</a></li>
							<li><a href="https://medium.com/">Medium</a></li>
							<li><a href="https://www.reddit.com/">Reddit</a></li>
						</ul>
				</div>				
			</div>
		</div>
    );
  }
}

export default MyData;