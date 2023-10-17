import React from 'react'
import Select from './Select'

const Input = ({handleChange,handleSelect,handleSubRegionSelect,countryData,region}) => {
  const continents = [...new Set(countryData.map(country=>country.region))];
  const subRegions = [...new Set(countryData.filter((country)=>country.region === region).map(country=>country.subregion!==undefined ? country.subregion : null))]
  return (
    <div className='flex flex-col w-[95vw] justify-between pl-4 desktop:flex-row desktop:pl-16 bg-White dark:bg-Very_Dark_Blue pb-4'>
      <div className='my-8 desktop:basis-[40%]'>
      <input type="text" name="country" className='rounded-lg drop-shadow-md shadow-inner px-4 py-4 pl-16 w-11/12 h-20 desktop:h-auto accent-Dark_Gray  text-Dark_Gray caret-Dark_Gray dark:bg-Dark_Blue dark:text-White dark:caret-White dark:placeholder:text-White dark:border-Dark_Blue dark:accent-Dark_Blue bg-search_light_mode bg-no-repeat bg-[center_left_1rem] bg-opacity-100 desktop:pl-[3.3rem] dark:bg-search_dark_mode cursor-text' placeholder='Search for a country... ' onChange={(event)=> handleChange(event.target.value)} />
      </div>
      <div className='flex flex-col flex-wrap h-44 desktop:h-fit desktop:flex-row justify-between content-between basis-[50%]'>
       <Select handleSelect={handleSelect} optionValues={continents} isNone={true} defaultValue="Filter By region" />
       <Select handleSelect={handleSubRegionSelect} optionValues={subRegions} isNone={true} defaultValue="Filter By subregion" />
      </div>
    </div>
  )
}

export default Input
