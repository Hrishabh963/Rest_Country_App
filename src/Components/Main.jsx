import axios from 'axios';
import React, { useEffect, useState ,useRef} from 'react'
import Country from './Country';
import Input from './Input';
import Loading from './Loading';
import SearchError from './SearchError';
import Error from './Error';

const Main = () => {
    const [countryData,setCountryData] = useState();
    const [filterData,setFilterData] = useState();
    const [input,setInput] = useState('');
    const [currentRegion,setRegion] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState({
      error:false,
      errorMessage:undefined
    });
    const initial = useRef(true);


    const handleChange = (value)=>{
      setInput(value);
    }

    const handleSelect = (value)=>{
      setRegion(value);
    }


    useEffect(()=>{
      setLoading(true);
      setError({error:false})
        if(initial.current){
          setTimeout(()=>{
            axios.get('https://restcountries.com/v3.1/all')
            .then(res=>{
              setLoading(false);
              setCountryData(res.data)
            })
            .catch(error =>{
              setLoading(false);
              setError({error:true,errorMessage:error.message})
            });
          },500)
        }
        else{
          if(currentRegion!==''){
            console.log("region switched to",currentRegion);
            axios.get(`https://restcountries.com/v3.1/region/${currentRegion}`)
            .then(res=>{
              setLoading(false);
              setCountryData(res.data)
            })
            .catch(error => {
              setLoading(false);
              setError({error:true,errorMessage:error.message})
            });
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

    {error.error && <Error message={error.errorMessage} />}

    {filterData && filterData.length === 0 && input!=='' && !loading && <SearchError />}

    <div className='flex flex-col items-center  w-screen desktop:items-stretch desktop:flex-row desktop:flex-wrap desktop:mt-0 desktop:mb-0 desktop:ml-auto desktop:mr-auto desktop:pl-8'>

    {!filterData && input==='' && !loading && countryData && countryData.map((country,index)=>{
        return <Country key={index} name={country.name.official} flag={country.flags.png} population={country.population} region={country.region} capital={country.capital} />
    })}

    {filterData && input!=='' && !loading && filterData.map((country,index)=>{
      return <Country key={index} name={country.name.official} flag={country.flags.png} population={country.population} region={country.region} capital={country.capital} />
    })}


    </div>
    
    </main>
    </>
    
  )
}

export default Main
