import React from 'react';
//assets
import '../styles/searchUser.css';

const SearchUser = () => {
    return(
        <div className="search-container">
            <input className="input-search" type="text" placeholder="Buscar usuario..."/>
        </div>
    )
}

export default SearchUser;