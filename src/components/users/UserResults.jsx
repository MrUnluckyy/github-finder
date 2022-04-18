import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'

const UserResults = () => {
  const { users, isLoading } = useContext(GithubContext)

  if (!isLoading) {
    return (
      <div className='grid grid-cols-1 gap-8 x:grid-cols-4 lg:grid-col-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return (
      <h1>
        <Spinner />
      </h1>
    )
  }
}

export default UserResults
