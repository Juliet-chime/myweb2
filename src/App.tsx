import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Navigation from './component/nav/Navigation';
import Home from './pages/home/Home';
import PassengerDetails from './pages/passengerDetails/PassengerDetails';
import SelectBus from './pages/selectBus';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation /><br/><br/><br/><br/>
       
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='selectbus' element={<SelectBus/>}/>
        <Route path='passengerdetails' element={<PassengerDetails/>}/>
       </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
