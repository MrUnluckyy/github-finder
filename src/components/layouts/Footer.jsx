import { FaCogs } from 'react-icons/fa'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <FaCogs className='text-3xl' />
      <p>Copyright &copy; {footerYear} All Rights Reserved</p>
    </footer>
  )
}

export default Footer
