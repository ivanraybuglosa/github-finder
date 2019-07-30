import React, { Fragment, useState, useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import UserList from './components/users/UserList';
import Search from './components/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App = () => {
  useEffect(() => {
    // githubContext.getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" render={props => (
                  <Fragment>
                    <Search />
                    <UserList />
                  </Fragment>
                )} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
