import { useState } from 'react'

const Select = ({handleSelect,optionValues,defaultValue}) => {
  const [selected,setSelected] = useState();
  const handleChange = (value)=>{
    setSelected(value);
    handleSelect(value);
  }
  return (
    
       <select name='Filter' value={selected}  className='h-16 mt-5 bg-White drop-shadow-md shadow-inner p-4 w-5/12 desktop:w-52 rounded-lg desktop:h-14 desktop:mt-8 dark:bg-Dark_Blue dark:text-White cursor-pointer' onChange={(event)=>handleChange(event.target.value)}>
          <option value="" hidden defaultChecked={true}>{defaultValue}</option>
          {optionValues.map((option,index)=>{
            return <option key={index} value={option}>{option}</option>
          })}
          <option value="">None</option>
        </select>

  )
}

export default Select
