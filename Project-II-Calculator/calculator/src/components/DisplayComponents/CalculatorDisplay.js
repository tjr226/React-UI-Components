import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div>
            <p>{props.displayValue}</p>
        </div>
    )
}

export default CalculatorDisplay