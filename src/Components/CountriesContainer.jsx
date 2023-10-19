import React from 'react'
import Country from './Country'
const CountriesContainer = ({countryData}) => {
  return (
    <>
      {countryData.map((country,index)=>{
          return <Country key={index} name={country.name.common} flag={country.flags.png} population={country.population} cca2={country.cca2} region={country.region} capital={country.capital}  />
      })}
    </>
  )
}

export default CountriesContainer
