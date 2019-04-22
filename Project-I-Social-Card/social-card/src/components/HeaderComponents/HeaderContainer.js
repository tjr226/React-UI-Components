import React from 'react';
import './Header.css';

// import './HeaderContent';
// import './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
        <div>
    <ImageThumbnail />
    <HeaderTitle />
    </div>
    );
}

export default HeaderContainer