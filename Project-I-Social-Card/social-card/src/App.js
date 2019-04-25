import React from 'react';
import './App.css';
import './components/HeaderComponents/HeaderContainer.js'
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer';
import FooterIcons from './components/FooterComponents/Footer';


const App = () => {

  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />
      <FooterIcons />
    </div>
  );
};

export default App;
