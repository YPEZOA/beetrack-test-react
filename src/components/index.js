import React, { Component } from 'react';
//assets
import '../styles/mainPage.css';
import api_data from '../constants/api_data';
import getUsers from '../services/getUsers';
//Components
import AddNewUser from './AddNewUser';
import Title from './Title';
import SearchUser from '../components/SearchUser';
import UsersTable from './UsersTable';

class MainPage extends Component {
    constructor() {
        super();
        this.state = {initialData: null}
    }

    getData = () => {
        fetch(api_data)
        .then(res => {
            console.log(res);
            return res.json();
        }).then(data => {
            const newData = data;
            console.log(newData);
            this.setState({
                initialData: newData
            })
        }).catch(err => console.log('This error:', err));
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return(
            <div className="main-container">
                <Title title={'Beetrack'}/>
                <SearchUser />
                <AddNewUser/>  
                <UsersTable 
                photo={"img"}
                name={"name"} 
                description={"description"}
                />            
            </div>
        )
    }
}

export default MainPage;