import React from 'react';
import './App.css';
import './components/HeaderComponents/HeaderContainer.js'
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer';


const App = () => {

  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
