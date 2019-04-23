import React from 'react';
import './Button.css';

const BasicButton = props => <button className={`basicButtonStyles ${props.buttonStyle}`}>{props.text}</button> ;
    BasicButton.defaultProps = {
        buttonStyle: 'teal',
        text: "Click Me!",
    };


const NumberButton = props => <button className={`${props.buttonStyle}`}>{props.text}</button>;
    NumberButton.defaultProps = {
        buttonStyle: 'numberButtonStyle',
        text: "#",
    }