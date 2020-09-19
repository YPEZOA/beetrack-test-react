import React from 'react';
//assets
import '../styles/searchUser.css';

const SearchUser = ({ handleUserSearch, handleChange}) => {

    return(
        <div className="search-container">
            <input onChange={handleChange} onKeyUp={handleUserSearch} className="input-search" type="text" placeholder="Buscar usuario..."/>
        </div>
    )
}

export default SearchUser;