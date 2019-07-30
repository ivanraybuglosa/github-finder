import React, { Fragment } from 'react';
import UserList from '../users/UserList';
import Search from '../Search';

const Home = () => <Fragment>
  <Search />
  <UserList />
</Fragment>

export default Home
