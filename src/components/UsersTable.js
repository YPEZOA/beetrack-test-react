import React from 'react';

const UsersTable = ({ photo, name, description }) => {


    return(
        <div className="container-table">
            <table className="table-striped">
                <tbody>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                </tr>
                <tr>
                    <td>{photo}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                </tr>
                </tbody>
            </table>
            
        </div>
    )

}

export default UsersTable;