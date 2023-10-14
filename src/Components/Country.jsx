import React from 'react'

const Country = ({name,flag,population,capital,region}) => {
  const populationFormat = population.toLocaleString('en-US');  
  return (
    <div className='flex flex-col drop-shadow-lg h-fit w-4/6 my-6 rounded-lg bg-White desktop:basis-[19%] desktop:h-96 desktop:mx-7 dark:bg-Dark_Blue cursor-text'>
    <img src={flag} alt={name} className='rounded-t-lg w-full h-[55%]' />
     <div className='flex flex-col p-4 pb-11'>
     <h1 className='text-xl font-extrabold py-3 flex text-Very_Dark_Blue_Light_text dark:text-White'>{name}</h1> 
     <p className='font-semibold flex text-Very_Dark_Blue_Light_text dark:text-White'>Population: <span className='px-2 font-light text-Very_Dark_Blue_Light_text dark:text-White'>{populationFormat}</span></p>
     <p className='font-semibold flex text-Very_Dark_Blue_Light_text dark:text-White'>Region: <span className='px-2 font-light text-Very_Dark_Blue_Light_text dark:text-White'>{region}</span></p>
     <p className='font-semibold flex text-Very_Dark_Blue_Light_text dark:text-White'>Capital: <span className='px-2 font-light text-Very_Dark_Blue_Light_text dark:text-White'>{capital}</span></p>
     </div>
    </div>
  )
}

export default Country
