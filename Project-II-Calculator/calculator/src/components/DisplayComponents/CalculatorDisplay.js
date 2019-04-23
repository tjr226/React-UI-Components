import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div>
            <p className="calculator-display">{props.displayValue}</p>
        </div>
    )
}

export default CalculatorDisplay