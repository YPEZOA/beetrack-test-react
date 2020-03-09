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
        this.state = { users: [] }

    }

    getData = () => {
        axios.get(api_data)
        .then(res => { 
            console.log(res);
            this.setState({ users: res.data})
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
                <Title title={'Beetrack'}/>
                <SearchUser />
                <AddNewUser/>     
                <UsersTable data={users}/>
            </div>
        )
    }
}

export default MainPage;