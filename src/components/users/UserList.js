import React from 'react';
import PropTypes from 'prop-types'

import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

const UserList = ({users, loading}) => {
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

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default UserList
