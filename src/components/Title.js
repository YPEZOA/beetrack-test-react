import React from 'react';

//assets
import '../styles/title.css';

const Title = ({ title }) => {
    return(
        <div className="main-title">
            <h2 className="text-title">Test <strong>{title}</strong></h2>
        </div>
    )
}

export default Title;