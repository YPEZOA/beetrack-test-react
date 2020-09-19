import React from 'react';
//assets
import '../styles/addUser.css';
import { ModalManager } from 'react-dynamic-modal';
import MyModal from '../components/MyModal';

const openModal = () => {
    ModalManager.open( <div className="modalContainer"> <MyModal /></div>);
}

const AddNewUser = () => {
    return(
        <div className="addUser-container">
            <div className="add__user-button btn btn-warning" onClick={ () => openModal()}>
                <span className="glyphicon glyphicon-plus-sign"></span>
                <p className="button-text">Nuevo contacto</p>
            </div>
        </div>
    )
}

export default AddNewUser;