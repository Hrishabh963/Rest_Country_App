import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchCountryData } from './apiService';
import Error from './Error'
const CountryData = () => {
  const {id} = useParams();
  const [countryInfo,setCountryInfo] = useState([]);
  const navigate = useNavigate();
  const [error,setError] = useState({
    error : false,
    errorMessage: undefined
  })

  //Handle navigation for home page
  const handleNavigation = ()=>{
  navigate('/')
  }

  //Fetch the country data
  useEffect(()=>{
    setError({error:false})
    fetchCountryData(id)
    .then((data)=>{
      setCountryInfo(data);
    })
    .catch((error)=>{
      setError({error : true , errorMessage:error.message})
    })
  },[])

  const country = {...countryInfo[0]};

  return (
    <section className='min-h-screen bg-Very_Light_Gray flex flex-col dark:bg-Very_Dark_Blue'>
      <div className='flex justify-start'>
      <button type="button" onClick={handleNavigation}>Back</button>
      </div>
      {error.error && <Error message={error.errorMessage} />}
    </section>
  )
}

export default CountryData
