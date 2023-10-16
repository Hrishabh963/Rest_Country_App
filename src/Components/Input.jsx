import React from 'react'

const Input = ({handleChange,handleSelect}) => {
  return (
    <div className='flex flex-col w-[95vw] justify-between pl-4 desktop:flex-row desktop:pl-16 bg-White dark:bg-Very_Dark_Blue pb-4'>
      <div className='my-8 desktop:basis-[40%]'>
      <input type="text" name="country" className='rounded-lg drop-shadow-md shadow-inner px-4 py-4 pl-16 w-11/12 h-20 desktop:h-auto accent-Dark_Gray  text-Dark_Gray caret-Dark_Gray dark:bg-Dark_Blue dark:text-White dark:caret-White dark:placeholder:text-White dark:border-Dark_Blue dark:accent-Dark_Blue bg-search_light_mode bg-no-repeat bg-[center_left_1rem] bg-opacity-100 desktop:pl-[3.3rem] dark:bg-search_dark_mode cursor-text' placeholder='Search for a country... ' onChange={(event)=> handleChange(event.target.value)} />
      </div>
        <select name='Filter' defaultValue="Filter By Region"  className='h-16 bg-White drop-shadow-md shadow-inner p-4 w-6/12 rounded-lg desktop:basis-[15%] desktop:h-14 desktop:mt-8 dark:bg-Dark_Blue dark:text-White cursor-pointer' onChange={(event)=>handleSelect(event.target.value)}>
          <option value="" hidden defaultChecked={true}>Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Input
