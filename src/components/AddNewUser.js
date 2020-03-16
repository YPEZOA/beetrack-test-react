import React from 'react';
//assets
import '../styles/addUser.css';
import { ModalManager } from 'react-dynamic-modal';
import MyModal from '../components/MyModal';

const AddNewUser = () => {
    
    const openModal = () => {
        ModalManager.open( <div className="modalContainer"> <MyModal /></div>);
    }

    return(
        <div className="addUser-container">
            <button className="add__user-button btn btn-warning" type="submit" onClick={() => openModal()}>
                <span className="glyphicon glyphicon-plus-sign"></span>
                <p className="button-text">Nuevo contacto</p>
            </button>
        </div>
    )
}

export default AddNewUser;