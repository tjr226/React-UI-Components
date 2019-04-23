import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay className="calculator-display" displayValue="3" />

      <div className="square-buttons">

        <div className="actions-and-numbers">
          <ActionButton className="action-button" text="clear" />

          <div className="number-row">
            <NumberButton text="9" />
            <NumberButton text="8" />
            <NumberButton text="7" />
          </div>
          <div className="number-row">
            <NumberButton text="6" />
            <NumberButton text="5" />
            <NumberButton text="4" />
          </div>
          <div className="number-row">
            <NumberButton text="3" />
            <NumberButton text="2" />
            <NumberButton text="1" />
          </div>

          <ActionButton className="action-button" text="0" />
        </div>
        {/* end actions-and-numbers */}

        <div className="math-functions">
          <NumberButton text="%" />
          <NumberButton text="X" />
          <NumberButton text="-" />
          <NumberButton text="+" />
          <NumberButton text="=" />
        </div>


        {/* end square buttons */}
      </div>

      {/* end app div */}
    </div>
  );
};

export default App;
