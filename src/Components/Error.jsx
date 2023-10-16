import React from 'react'

const Error = ({message}) => {
  return (
    <div className='flex min-h-screen w-screen justify-center'>
      <h1 className='text-3xl font-semibold text-Very_Dark_Blue_Light_text dark:text-White p-10'>{message}</h1>
    </div>
  )
}

export default Error
