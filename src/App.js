import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './components/layouts/Navbar';
import UserList from './components/users/UserList';
import Search from './components/Search';
import Alert from './components/layouts/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
                                                              client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data, loading: false })
  }

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
                                                              client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items, loading: false })
  }

  clearUsers = () => this.setState({ users: [], loading: false })

  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type}})

    setTimeout(() => this.setState({ alert: null}), 5000);
  }

  render() {
    const { users, loading } = this.state
    return (
      <div className="App">
        <Navbar />
        
        <div className="container">
          { this.state.alert !== null && <Alert alert={this.state.alert}/>}
          <Search searchUsers={this.searchUsers} 
                  clearUsers={this.clearUsers}
                  showClear={ users.length > 0 ? true : false }
                  showAlert={this.showAlert}/>
          <UserList loading={ loading} users={users}  />
        </div>
      </div>
    );
  }
}

export default App;
