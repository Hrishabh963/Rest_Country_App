import React, { useEffect, useState } from 'react'
import { fetchCountryData } from '../apiService';
import { useNavigate } from 'react-router-dom';

const Border = ({borderCountries}) => {
  const [borderCountryNames,setBorderCountryNames] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const getCountryDetails = async ()=>{
        try{
            const countryData = await Promise.all(borderCountries.map((code)=> fetchCountryData(code)));
            const countryNames = countryData.map((country)=>country[0]);
            const countryNameArray = countryNames.map((country)=>  {
               return { name : country.name.common,code : country.cca2}
            } );
            setBorderCountryNames(countryNameArray);
        }catch(error){
            throw error;
        }
    }
    getCountryDetails();
  },[])

  const handleClick = (event)=>{
    const trigger = event.target.closest('.border_countries');
    if(!trigger) return;
    const id = trigger.id;
    navigate(`/country/${id}`)
  }

  return (
    <div onClick={handleClick} className='flex flex-col desktop:flex-row '>
      <p className='flex items-center desktop:justify-center text-Very_Dark_Blue_Light_text dark:text-White font-extrabold '>Border Countries :</p> 
      <div className='flex flex-wrap desktop:pl-2'>
      {borderCountryNames.length>0  && borderCountryNames.map((country,index)=>{
        return <p key={index} id={country.code} className='border_countries cursor-pointer flex justify-center items-center m-2 h-9 w-24 transform ease-in-out duration-150 text-center hover:-translate-y-2 text-sm font-light text-Very_Dark_Blue_Light_text dark:text-White rounded-md bg-White dark:bg-Dark_Blue drop-shadow-md shadow-inner'>{country.name}</p>
      })}
      </div>
      
    </div>
  )
}

export default Border
