import React from 'react';
import '../styles/usersTable.css';
import User from './User';

//esta props llamada data se paso desde el componente padre
const UsersTable = ({ data }) => {
        return (

        <div className="container-table">
                <table className="table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map( users => {
                        const { photo, name, description, id } = users;
                        return(
                            <User
                            photo={photo}
                            name={name}
                            description={description}
                            key={id}
                            />
                        )
                    })
                }
                </tbody>
            </table>
        </div>  
    )
}

export default UsersTable;