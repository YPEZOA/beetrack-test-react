import React from 'react';
//assets
import '../styles/addUser.css';

const AddNewUser = () => {
    
    return(
        <div className="addUser-container">
            <button className="add__user-button btn btn-warning">
                <span className="glyphicon glyphicon-plus-sign"></span>
                <p className="button-text">Nuevo contacto</p>
            </button>
        </div>
    )
}

export default AddNewUser;