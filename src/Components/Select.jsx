import { useState } from 'react'

const Select = ({handleSelect,optionValues,defaultValue,isNone}) => {
  const [selected,setSelected] = useState();
  const handleChange = (value)=>{
    setSelected(value);
    handleSelect(value);
  }
  return (
    
       <select name='Filter' value={selected}  className='h-16 mt-3 bg-White text-sm desktop:text-base drop-shadow-md shadow-inner p-4 w-5/12 desktop:w-52 rounded-lg desktop:h-14 desktop:mt-8 dark:bg-Dark_Blue dark:text-White cursor-pointer transform ease-in-out duration-150 hover:-translate-y-2 hover:w-56' onChange={(event)=>handleChange(event.target.value)}>
          <option value="" hidden defaultChecked={true}>{defaultValue}</option>
          {optionValues.map((option,index)=>{
            return <option key={index} value={option}>{option}</option>
          })}
         {isNone && <option value="">None</option>}
        </select>

  )
}

export default Select
