import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

import { searchUsers } from '../../context/github/GithubActions'

const UserSearch = () => {
  const [searchText, setSearchText] = useState('')
  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (event) => setSearchText(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!searchText) {
      setAlert('Please enter something', 'error')
    } else {
      dispatch('SET_LOADING')
      const users = await searchUsers(searchText)
      dispatch({ type: 'GET_USERS', payload: users })

      setSearchText('')
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              {alert.message}
              <input
                type='text'
                placeholder='Search'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                value={searchText}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
            className='btn btn-ghost btn-lg'
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
