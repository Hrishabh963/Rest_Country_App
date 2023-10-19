const CountryDetails = ({country}) => {

  const getNativeName = ()=>{
    for (const lang in country.name.nativeName) {
        return country.name.nativeName[lang].common;
    }
  }

  const getCurrencyName = ()=>{
    for(const currency in  country.currencies){
        return country.currencies[currency].name
    }
  }

  const getLanguages = ()=>{
    let arr = [];
    for (const lang in country.languages) {
        const element = country.languages[lang];
        arr.push(element);
    }
    return arr.toLocaleString();
  }

  const nativeName = getNativeName();

  const population = country.population.toLocaleString('en-US');

  const currency = getCurrencyName();
  const languages = getLanguages();
  return (
    <>
     <div>
        <img src={country.flags.svg} alt={country.name.official} className='w-[90vw] desktop:w-[33vw] desktop:h-[44vh] shadow-sm drop-shadow-sm' />
     </div>
     <div className='flex flex-col pt-16 desktop:pl-32'>
    <div className='flex flex-col justify-between w-[35vw] desktop:flex-row desktop:justify-between'>
        <div className='flex flex-col'>
            <h1>{country.name.official}</h1>
            <p>Native name: <span>{nativeName}</span></p>
            <p>Population:{population} <span></span></p>
            <p>Region:{country.region} <span></span></p>
            <p>Sub Region:{country.subregion} <span></span></p>
            <p>Capital:{country.capital?.toString()} <span></span></p>
        </div>
        <div>
            <p>Top Level Domain: <span>{country.tld}</span></p>
            <p>Currencies:{currency} <span></span></p>
            <p>Languages:{languages} <span></span></p>
        </div>
    </div>
    <div></div>
    </div> 
    </>
  )
}

export default CountryDetails
