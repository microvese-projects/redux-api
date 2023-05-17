import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

function UserContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

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
