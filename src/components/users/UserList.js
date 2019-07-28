import React, { useContext } from 'react';
import PropTypes from 'prop-types'

import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

import GithubContext from '../../context/github/githubContext';

const UserList = () => {
  const githubContext = useContext(GithubContext);
  
  const { users, loading } = githubContext;

  if(loading){
    return <Spinner />
  }else{
    return (
      <div style={listStyle}> 
        { users.map((user,index) => {
          return <UserItem key={index} user={user} />
          })
        }
      </div>
    )
  }
}

const listStyle = {
  display: 'grid',
  gridTemplateColumns:  'repeat(3,1fr)',
  gridGap: '1rem'
}

export default UserList
