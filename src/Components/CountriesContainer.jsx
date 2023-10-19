import React from 'react'
import Country from './Country'
const CountriesContainer = ({countryData}) => {
  return (
    <>
      {countryData.map((country,index)=>{
          return <Country key={index} name={country.name.official} flag={country.flags.png} population={country.population} ccn3={country.ccn3} region={country.region} capital={country.capital}  />
      })}
    </>
  )
}

export default CountriesContainer
