import React from 'react';
import './Button.css';

const NumberButton = props => <button className={`${props.buttonStyle}`}>{props.text}</button>;
    NumberButton.defaultProps = {
        buttonStyle: 'numberButtonStyle',
        text: "#",
    }

export default NumberButton