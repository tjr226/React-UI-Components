import React from 'react';
import './Footer.css';
import heart from './FooterIcons/heart.png';
import mail from './FooterIcons/message-closed-envelope.png';
import message from './FooterIcons/speech-bubble.png';
import update from './FooterIcons/update-arrows.png';

const FooterIcons = () => {
    return (
        <div className="footer-icons">
            <img src={message} alt="message" />
            <img src={update} alt="update" />
            <img src={heart} alt="heart" />
            <img src={mail} alt="mail" />


        </div>
    )
}

export default FooterIcons