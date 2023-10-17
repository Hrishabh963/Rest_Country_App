import React from 'react'
import Select from './Select'
const Sort = ({toggleSort , toggleSortType}) => {
  return (
    <div className='flex flex-col w-[95vw]  desktop:w-[35vw] justify-between pl-4 desktop:-mt-10 desktop:flex-row desktop:pl-16 bg-White dark:bg-Very_Dark_Blue pb-2'>
      <Select handleSelect={toggleSortType} isNone={true} optionValues={['Population','Area']} defaultValue="Sort by" />
      <Select handleSelect={toggleSort} isNone={false} optionValues={['Ascending','Descending']} defaultValue="Ascending" />
    </div>
  )
}

export default Sort
