import React from 'react'

const Error = ({message}) => {
  return (
    <div className='flex min-h-screen w-screen justify-center'>
      <h1 className='text-5xl font-extrabold p-4 text-Very_Dark_Blue_Light_text dark:text-White'>{message}</h1>
    </div>
  )
}

export default Error
