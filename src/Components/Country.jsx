import React from 'react'

const Country = ({name,flag,population,capital,region}) => {
  const populationFormat = population.toLocaleString('en-US');  
  return (
    <div className='flex flex-col drop-shadow-lg h-fit w-4/6 my-6 rounded-lg bg-White desktop:basis-[19%] desktop:h-96 desktop:mx-7'>
    <img src={flag} alt={name} className='rounded-t-lg w-full h-[55%]' />
     <div className='flex flex-col p-4 pb-11'>
     <h1 className='text-xl font-extrabold py-3 flex'>{name}</h1> 
     <p className='font-semibold flex text-Very_Dark_Blue_Light_text'>Population: <span className='px-2 font-light text-Very_Dark_Blue_Light_text'>{populationFormat}</span></p>
     <p className='font-semibold flex text-Very_Dark_Blue_Light_text'>Region: <span className='px-2 font-light text-Very_Dark_Blue_Light_text'>{region}</span></p>
     <p className='font-semibold flex text-Very_Dark_Blue_Light_text'>Capital: <span className='px-2 font-light text-Very_Dark_Blue_Light_text'>{capital}</span></p>
     </div>
    </div>
  )
}

export default Country
