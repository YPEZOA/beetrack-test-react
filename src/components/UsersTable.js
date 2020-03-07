import React from 'react';
import '../styles/usersTable.css';

const UsersTable = ({ photo, name, description }) => {

    return(
        <div className="container-table">
            <table className="table-striped">
                <tbody>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><img className="photo__user" alt="user" src={photo}></img></td>
                    <td>{name}</td>
                    <td>{description}</td>
                </tr>
                </tbody>
            </table>
            
            
        </div>
    )
}

export default UsersTable;