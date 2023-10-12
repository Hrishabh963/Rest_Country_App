import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Country from './Country';

const Main = () => {
    const [countryData,setCountryData] = useState(null);
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(res=>setCountryData(res.data))
    },[])
  return (
    <main className='flex flex-col items-center bg-Very_Light_Gray'>
    {countryData && countryData.map((country,index)=>{
        return <Country key={index} name={country.name.official} flag={country.flags.png} population={country.population} region={country.region} capital={country.capital} />
    })}
    </main>
  )
}

export default Main
