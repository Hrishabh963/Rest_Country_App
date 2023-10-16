import React from 'react'
import icon from '/public/assets/icons8-loading-100.png'
const Loading = () => {
  return (
    <div className='flex justify-center min-h-fit'>
      <img src={icon} alt="loading" className='animate-spin' /> <h1 className='text-4xl font-semibold text-Very_Dark_Blue_Light_text ml-4 py-4 mt-3'>Loading</h1>
    </div>
  )
}

export default Loading
