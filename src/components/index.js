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
        this.state = {
             users: [],
             dataPerPage: [],
             inputSearch: '',
             currentPage: 1,
             limitPage: 4
        }
    }

    getData = () => {
        axios.get(api_data)
        .then(res => { 
            this.setState({ users: res.data})
            console.log(this.state.users);
        })
        .catch(err => console.log('Error to getData', err))
    }

    //input value where user types
    handleChange = e => { 
        this.setState({ inputSearch: e.target.value });
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
                dataPerPage: results
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getData();
        this.userDataPerpage();
    }

    // method that return paginated data
    userDataPerpage = () => {
        const { currentPage, limitPage } = this.state;

        fetch(`${api_data}?_page=${currentPage}&_limit=${limitPage}`)
        .then(data => {
            return data.json();
        })
        .then(userData => {
            this.setState({
                dataPerPage: userData
            })
        })
        .catch(err => console.log('err', err))
    }

    nextPage = () => {
        const { users, currentPage, limitPage } = this.state;
        let dataUser = users.length;
        const maxPage = Math.ceil(dataUser / limitPage);

        if(maxPage > currentPage) {
            this.setState({
                currentPage: currentPage +1
            }, () => {
                this.userDataPerpage();
            })
        }
    }

    previousPage = () => {
        const { currentPage } = this.state;
        if(currentPage === 1) {
            return currentPage;
        } else {
            this.setState({
                currentPage: currentPage -1
            }, () => {
                this.userDataPerpage();
            })
        }
    }

    

    render() {
        const { dataPerPage, currentPage } = this.state;
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
                    data={dataPerPage}
                />
                {/* if you have gone to the next page */}
                {currentPage > 1 && <button className="btn btn-default" onClick={() => this.previousPage()}>Anterior</button>}
                <button className="btn btn-default" onClick={() => this.nextPage()}>Pagina siguiente</button>
            </div>
        )
    }
}

export default MainPage;