import React from 'react'

const Country = ({name,flag,population,capital,region}) => {
  return (
    <div className='flex flex-col shadow-xl h-96 w-4/6 my-6 rounded-lg bg-White'>
    <img src={flag} alt={name} className='rounded-t-lg' />
     <div className='flex flex-col p-4 pb-11'>
     <h1 className='text-xl font-extrabold py-3 flex'>{name}</h1> 
     <p className='font-semibold flex'>Population: <span className='px-2 font-light'>{population}</span></p>
     <p className='font-semibold flex'>Region: <span className='px-2 font-light'>{region}</span></p>
     <p className='font-semibold flex'>Capital: <span className='px-2 font-light'>{capital}</span></p>
     </div>
    </div>
  )
}

export default Country
