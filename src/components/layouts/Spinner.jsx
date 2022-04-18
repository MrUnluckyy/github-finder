import loader from './assets/loader.gif'

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img
        src={loader}
        alt='Loading...'
        width={180}
        className='text-center mx-auto'
      />
    </div>
  )
}

export default Spinner
