import React from 'react';
import Menu from './Menu';
import Header from './Header';
import AppBody from './AppBody';
import Footer from './Footer';
import MyData from './MyData';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
		<Header />
      </header>  
		<Menu />
		<MyData />
		<AppBody />
		<Footer />
    </div>
  );
}



