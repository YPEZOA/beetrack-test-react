import React,{Component} from 'react';
//Assets
import { Modal,Effect} from 'react-dynamic-modal';
import '../styles/modal.css';
 
class MyModal extends Component{
    
   handleSubmit = () => {
        
   }

   render() {

      return (
         <Modal
            effect={Effect.FlipVertical3D} className="modalContainer">
            <form className="user-form">
                <div className="form-group">
                    <h2 className="formTitle">Agregar contacto</h2>
                    <label>URL Imagen de perfil</label>
                    <input className="form-control" type="text"></input>
                </div>
                <div className="form-group">
                    <label>Nombre</label>
                    <input className="form-control" isrequired="true" type="text" />
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <p><textarea className="form-control" rows="3"></textarea></p>
                </div>
               <div className="container-button"><button type="submit" className="btn btn-warning">Guardar</button></div>
            </form>
         </Modal>
      );
   }
}

MyModal.displayName = 'MyModal';

export default MyModal;