import React from 'react';
import '../styles/user.css';
import image from '../anonimo.jpg';
import api_data from '../constants/api_data';

// validate if user doesnt have photo and add one by default
const validatePhoto = (e) => {
    e.target.src = image;
}

const deleteUser = (userId) => {
    fetch(`${api_data}${userId}`, {
        method: 'DELETE'
    })
    .then(() => {
        window.location.reload();
    })
}

const User = ({ id, photo, name, description }) => {  
    return (
        <tr>
            <td className="user-container">
                <img onError={e => validatePhoto(e)} src={photo} alt="userPhoto"></img>
                <span>{name}</span>
                <button className="eliminate" id={id} onClick={() => deleteUser(id)}>Eliminar</button>
            </td>
            <td>
                <p>{description}</p>
            </td>
        </tr>
    )
}

export default User;