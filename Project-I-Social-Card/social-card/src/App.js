import React from 'react';
import './App.scss';
import './components/HeaderComponents/HeaderContainer.js'
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer';


const App = () => {

  return (
    <div>
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
