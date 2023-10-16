import axios from 'axios';
import React, { useEffect, useState ,useRef} from 'react'
import Country from './Country';
import Input from './Input';
import Loading from './Loading';

const Main = () => {
    const [countryData,setCountryData] = useState();
    const [filterData,setFilterData] = useState();
    const [input,setInput] = useState('');
    const [currentRegion,setRegion] = useState('');
    const [loading,setLoading] = useState(false);
    const initial = useRef(true);


    const handleChange = (value)=>{
      setInput(value);
    }

    const handleSelect = (value)=>{
      setRegion(value);
    }


    useEffect(()=>{
      setLoading(true);
        if(initial.current){
          setTimeout(()=>{
            axios.get('https://restcountries.com/v3.1/all')
            .then(res=>{
              setLoading(false);
              setCountryData(res.data)
            })
            .catch(error => console.log(error));
          },4000)
        }
        else{
          if(currentRegion!==''){
            console.log("region switched to",currentRegion);
            axios.get(`https://restcountries.com/v3.1/region/${currentRegion}`)
            .then(res=>{
              setLoading(false);
              setCountryData(res.data)
            })
            .catch(error => console.log(error));
          }
        }
    },[currentRegion])


    useEffect(()=>{
      if(initial.current){
        initial.current = false;
      }
      else{
        setLoading(true);
        if(input!==''){
            const newData = countryData.filter((country)=> {
              let countryName = country.name.official.toLowerCase();
              let inp = input.toLowerCase();
              if(countryName.includes(inp)){
                return country;
              }
            });
           setFilterData(newData);
           setLoading(false);
        }else{
          setFilterData(undefined)
          setLoading(false)
        }
        
      }
      
    },[input,countryData])


  return (
    <>
    <main className='bg-Very_Light_Gray min-h-screen w-screen dark:bg-Very_Dark_Blue'>

    <Input handleChange={handleChange} handleSelect={handleSelect} />

    {loading && <Loading />}

    <div className='flex flex-col items-center  w-[94vw] desktop:items-stretch desktop:flex-row desktop:flex-wrap desktop:mt-0 desktop:mb-0 desktop:ml-auto desktop:mr-0'>

    {!filterData && input==='' && countryData && countryData.map((country,index)=>{
        return <Country key={index} name={country.name.official} flag={country.flags.png} population={country.population} region={country.region} capital={country.capital} />
    })}

    {filterData && input!=='' && filterData.map((country,index)=>{
      return <Country key={index} name={country.name.official} flag={country.flags.png} population={country.population} region={country.region} capital={country.capital} />
    })}

    </div>
    
    </main>
    </>
    
  )
}

export default Main
