import React from 'react'
import lightIcon from '/assets/icons8-loading-100.png'
import darkIcon from '/assets/icons8-loading-Dark.png'
const Loading = () => {
  return (
    <div className='flex justify-center min-h-fit'>
      <img src={lightIcon} alt="loading" className='animate-spin dark:hidden' /> <img src={darkIcon} alt="loading" className='animate-spin hidden dark:block' />  <h1 className='text-4xl font-semibold text-Very_Dark_Blue_Light_text ml-4 py-4 mt-3 dark:text-White'>Loading</h1>
    </div>
  )
}

export default Loading
