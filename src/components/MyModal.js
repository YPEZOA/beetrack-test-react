import React,{Component} from 'react';
//Assets
import { Modal,Effect} from 'react-dynamic-modal';
import '../styles/modal.css';
 
class MyModal extends Component{

   registerUser(user){
      const endPoint = "http://localhost:3001/api/users";
      const dataBody = JSON.stringify(user);

      fetch(endPoint, {
         method: 'POST',
         body: dataBody,
         headers: {
            'Content-type':'application/json'
         }
      }).then(res => res.json())
      .then(res => {
         console.log('response', res);
         window.location.reload();
      })
      .catch(err => console.log(err))
   }

   validateInfo(dataUser, event) {
      //Data for user
      const data = {
         photo: dataUser[0],
         name: dataUser[1],
         description: dataUser[2]
      }

      const { name, description } = data;
      const fieldError = document.querySelector(".fieldsValue");

      if(!name.length || !description.length) {
         fieldError.hidden = false;
         event.preventDefault();
      } else {
         fieldError.hidden = true;
         return this.registerUser(data)
      }
   }
   
   handleSubmit(e) {
      //Take all elements from form inputs
      const inputVal = document.querySelectorAll(".form-group > .form-control");
      const data = [];
      [...inputVal].map(res => data.push(res.value));
      console.log(data);
      return this.validateInfo(data, e)
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
                    <textarea className="form-control" rows="3"></textarea>
                    <span className="fieldsValue" hidden>Ingresa los campos requeridos</span>
                </div>
               <div className="container-button"><button onClick={e => this.handleSubmit(e)} type="submit" className="btn btn-warning">Guardar</button></div>
            </form>
         </Modal>
      );
   }
}

MyModal.displayName = 'MyModal';

export default MyModal;