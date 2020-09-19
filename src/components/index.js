import React, { Component } from 'react';
//assets
import '../styles/mainPage.css';
import api_data from '../constants/api_data';
import axios from 'axios';
//Components
import Title from './Title';
import SearchUser from '../components/SearchUser';
import AddNewUser from '../components/AddNewUser';
import UsersTable from './UsersTable';

class MainPage extends Component {
    constructor() {
        super();
        this.state = { users: [], inputSearch: ''}
    }

    getData = () => {
        axios.get(api_data)
        .then(res => { 
            this.setState({ users: res.data})
            console.log(this.state.users);
        })
        .catch(err => console.log(err))
    }

    //input value where user types
    handleChange = e => { this.setState({ inputSearch: e.target.value });
    }
    
    //Search method for users using the name
    handleUserSearch = e => {
        const { inputSearch } = this.state;
        e.preventDefault();
        fetch(`${api_data}?q=${inputSearch}`)
        .then(response => {
            return response.json();
        })
        .then(results => {
            this.setState({
                users: results
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const { users } = this.state;
        return(
            <div className="main-container">
                <Title 
                    title={'Beetrack'}
                />
                <SearchUser 
                    handleUserSearch={this.handleUserSearch}
                    handleChange={this.handleChange}
                />
                <AddNewUser/>
                <UsersTable
                    data={users}
                />
            </div>
        )
    }
}

export default MainPage;