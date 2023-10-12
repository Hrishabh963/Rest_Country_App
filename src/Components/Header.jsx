import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <nav className='flex justify-between w-screen h-28 shadow-lg  px-4 items-center bg-White'>
        <h1 className='text-xl font-extrabold text-Very_Dark_Blue_Light_text'>Where in the world?</h1> <div className='flex'><FontAwesomeIcon icon={faMoon} className='mt-1' /> <p className='px-2 text-Very_Dark_Blue_Light_text'>Dark mode</p></div>
    </nav>
  )
}

export default Header
