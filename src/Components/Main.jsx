import axios from 'axios';
import React, { useEffect, useState ,useRef} from 'react'
import Country from './Country';
import Input from './Input';


const Main = () => {
    const [countryData,setCountryData] = useState();
    const [filterData,setFilterData] = useState();
    const [input,setInput] = useState('');
    const [currentRegion,setRegion] = useState('');
    const initial = useRef(true);


    const handleChange = (value)=>{
      setInput(value);
    }

    const handleSelect = (value)=>{
      setRegion(value);
    }


    useEffect(()=>{
        if(initial.current){
          axios.get('https://restcountries.com/v3.1/all')
        .then(res=>setCountryData(res.data))
        .catch(error => console.log(error))
        }
        else{
          if(currentRegion!==''){
            console.log("region switched to",currentRegion);
            axios.get(`https://restcountries.com/v3.1/region/${currentRegion}`)
            .then(res=>setCountryData(res.data))
            .catch(error => console.log(error))
          }
        }
    },[currentRegion])


    useEffect(()=>{
      if(initial.current){
        console.log(`inital set to false`);
        initial.current = false;
      }
      else{
        if(input!==''){
          const newData = countryData.filter((country)=> {
            let countryName = country.name.official.toLowerCase();
            let inp = input.toLowerCase();
            if(countryName.includes(inp)){
              return country;
            }
          });
          console.log(newData);
         setFilterData(newData);
        }else{
          setFilterData(undefined)
        }
        
      }
      
    },[input,countryData])


  return (
    <>
    <Input handleChange={handleChange} handleSelect={handleSelect} />
    <main className='flex flex-col items-center bg-Very_Light_Gray desktop:flex-row desktop:flex-wrap desktop:justify-center'>
    {!filterData && input==='' && countryData && countryData.map((country,index)=>{
        return <Country key={index} name={country.name.official} flag={country.flags.png} population={country.population} region={country.region} capital={country.capital} />
    })}
    {filterData && input!=='' && filterData.map((country,index)=>{
      return <Country key={index} name={country.name.official} flag={country.flags.png} population={country.population} region={country.region} capital={country.capital} />
    })}
    </main>
    </>
    
  )
}

export default Main
