import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchCountryData } from './apiService';
import Error from './Error'
import CountryDetails from './CountryComponents/CountryDetails';
import Loading from './Loading';
const CountryData = () => {
  const {id} = useParams();
  const [countryInfo,setCountryInfo] = useState([]);
  const [loading,setLoading] = useState(true);
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
    setLoading(true);
    setError({error:false})
    fetchCountryData(id)
    .then((data)=>{
      setCountryInfo(data);
      setLoading(false);
    })
    .catch((error)=>{
      setError({error : true , errorMessage:error.message})
      setLoading(false);
    })
  },[id])

  const country = {...countryInfo[0]};

  return (
    <section className='min-h-[90vh] bg-Very_Light_Gray flex flex-col w-[100vw] pl-4 pt-10 desktop:pl-16 dark:bg-Very_Dark_Blue'>
      {loading ? <Loading /> : null }
      <div className='flex justify-start'>
      {!loading && <button type="button" className='bg-White text-sm font-light text-Very_Dark_Blue_Light_text dark:text-White dark:bg-Dark_Blue px-10 bg-arrow_light_mode bg-no-repeat bg-[center_left_0.6rem] dark:bg-arrow_dark_mode py-3 rounded-lg drop-shadow-md shadow-inner' onClick={handleNavigation}>Back</button>}
      </div>
      <div className='flex flex-col desktop:flex-row min-h-[60vh] pt-24'>
        {error.error && !loading && <Error message={error.errorMessage} />}
        {!error.error && !loading  &&countryInfo.length>0 && <CountryDetails country={country} />}
      </div>
    </section>
  )
}

export default CountryData
