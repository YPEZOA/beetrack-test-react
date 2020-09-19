import React from 'react';
import '../styles/user.css';

const User = ({ photo, name, description }) => {  

    return (
        <tr>
            <td className="user-container">
                <img src={photo} alt="userPhoto"></img>
                <span>{name}</span>
            </td>
            <td>
                <p>{description}</p>
            </td>
        </tr>
    )
}

export default User;