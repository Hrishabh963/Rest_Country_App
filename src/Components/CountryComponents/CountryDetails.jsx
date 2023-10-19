import Border from "./Border";
import CountryInfoDisplayer from "./CountryInfoDisplayer";

const CountryDetails = ({country}) => {
  //Function to get the native name of country
  const getNativeName = ()=>{
    for (const lang in country.name.nativeName) {
        return country.name.nativeName[lang].common;
    }
  }

  //Function to get currencies of the country
  const getCurrencyName = ()=>{
    const arr = [];
    for(const currency in  country.currencies){
         arr.push(country.currencies[currency].name)
    }
    return arr.toLocaleString();
  }

  //Function to get the languages of the country
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

  //JSX Render logic
  return (
    <>
     <div>
        <img src={country.flags.svg} alt={country.name.official} className='w-[90vw] desktop:w-[33vw] desktop:h-[44vh] shadow-sm drop-shadow-sm' />
     </div>
     <div className='flex flex-col pt-14 desktop:pl-32'>
    <h1 className="text-3xl text-Very_Dark_Blue_Light_text dark:text-White font-extrabold">{country.name.official}</h1>
    <CountryInfoDisplayer country={country} />
    <div className="pt-9">
        {country.borders && <Border borderCountries={country.borders} />}
    </div>
    </div> 
    </>
  )
}

export default CountryDetails
