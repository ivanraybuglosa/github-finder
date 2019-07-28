import React, { Fragment, useState, useEffect, useContext } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import UserList from './components/users/UserList';
import Search from './components/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    // githubContext.getUsers();
    // eslint-disable-next-line
  }, []);

  const showAlert = (msg, type) => {
    setAlert({msg, type});

    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          
          <div className="container">
            <Alert alert={alert}/>
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search
                    showAlert={showAlert}/>
                  <UserList />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props => (
                <User 
                  {...props } />
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
