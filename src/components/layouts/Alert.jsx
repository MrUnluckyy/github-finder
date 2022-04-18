import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import { FaTimes } from 'react-icons/fa'

const Alert = () => {
  const { alert } = useContext(AlertContext)

  return (
    alert && (
      <p className='flex items-center mb-4 space-x-2'>
        {alert.alertType === 'error' && <FaTimes fill='#ff6961' />}
        <p className='flex-1 text-base font-semibold leading-7 text-white'>
          <strong>{alert.message}</strong>
        </p>
      </p>
    )
  )
}

export default Alert
