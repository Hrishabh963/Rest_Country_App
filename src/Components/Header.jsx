import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { Outlet, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();

  //Function that toggles tailwind dark class
  const toggleDarkMode = ()=>{
    document.documentElement.classList.toggle('dark');
  }

  const navigateToHome = ()=> navigate('/');

  return (
    <>
    <nav className='flex justify-between w-screen h-28 drop-shadow-lg shadow-inner px-3 desktop:px-14 items-center bg-White dark:bg-Dark_Blue'>
        <h1 className='text-xl desktop:text-3xl font-extrabold text-Very_Dark_Blue_Light_text dark:text-White cursor-pointer' onClick={navigateToHome}>Where in the world?</h1>
         <div className='flex cursor-pointer' onClick={toggleDarkMode}><FontAwesomeIcon icon={faMoon} className='mt-1 dark:hidden' /> 
         <FontAwesomeIcon icon={faMoon} className='mt-1 hidden dark:flex' inverse /> 
         <p className='px-2 text-Very_Dark_Blue_Light_text font-extrabold dark:text-White'>Dark mode</p></div>
    </nav>
    <Outlet />
    </>
  )
}

export default Header
