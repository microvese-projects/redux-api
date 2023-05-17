import React from 'react'
import { useSelector } from 'react-redux'

function UserContainer() {

  const { users, isLoading, error} = useSelector((state) => state.users);

  if (isLoading) {
    return (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    )
  } else if (error !== null) {
    return (
      <div className='error'>
        <h4>Something went wrong</h4>
        <p>{error}</p>
      </div>
    )
  } else {
    return (
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {index + 1}. {user.name.first} {user.name.last} 
            </li>
          )
        })}
      </ul>
    )
  }
}

export default UserContainer;
