import React from 'react';
import './Button.css';



const ActionButton = props => <button className="action-button">{props.text}</button>;
    ActionButton.defaultProps = {
        text: "action",
    }

export default ActionButton