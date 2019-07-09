import React, { Fragment, Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import UserList from './components/users/UserList';
import Search from './components/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: []
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

  fetchUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
                                                              client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ user: res.data, loading: false })
  }

  fetchRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
                                                              client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ repos: res.data, loading: false })
  }

  clearUsers = () => this.setState({ users: [], loading: false })

  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type}})

    setTimeout(() => this.setState({ alert: null}), 5000);
  }

  render() {
    const { user, users, loading, repos } = this.state
    return (
      <Router>
        <div className="App">
          <Navbar />
          
          <div className="container">
            <Alert alert={this.state.alert}/>
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers}
                    showClear={ users.length > 0 ? true : false }
                    showAlert={this.showAlert}/>
                  <UserList loading={ loading} users={users}  />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props => (
                <User 
                  {...props } 
                  fetchUser={this.fetchUser}
                  fetchRepos={this.fetchRepos} 
                  user={user}
                  repos={repos}
                  loading={loading} />
              )}/>
            </Switch>
            
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
