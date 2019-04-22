import React from 'react';
import './Header.scss';

const HeaderTitle = () => {
    var date = new Date();
    return (
        <div>
            <h3>Lambda School</h3>
            <p className="header-title-small">@LambdaSchool · {date.toLocaleDateString()}</p>
        </div>
    )
}

export default HeaderTitle