import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './RouterFiles/Navbar';
import Cakes from './Cakes/Cakes';
import Cart from './Cart/Cart';
import Footer from './RouterFiles/Footer';
import HomePage from './RouterFiles/HomePage';
import Breads from './Breads/Breads';
import CreamlessCakes from './CreamlessCakes/CreamlessCakes';
import CheckOut from './Cart/CheckOut';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Cakes" exact component={Cakes}/>
        <Route path="/Breads" exact component={Breads}/>
        <Route path="/CreamlessCakes" exact component={CreamlessCakes}/>
        <Route path="/Cart" exact component={Cart}/>
        <Route path="/CheckOut" exact component={CheckOut}/>
      <Footer/>
      </Router>
    
    </div> //Problem is all are in app.js so rearrnage the things accordingly.
  );
}

export default App;