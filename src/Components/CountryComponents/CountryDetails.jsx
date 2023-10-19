import Border from "./Border";

const CountryDetails = ({country}) => {
  const getNativeName = ()=>{
    for (const lang in country.name.nativeName) {
        return country.name.nativeName[lang].common;
    }
  }

  const getCurrencyName = ()=>{
    const arr = [];
    for(const currency in  country.currencies){
         arr.push(country.currencies[currency].name)
    }
    return arr.toLocaleString();
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
     <div className='flex flex-col pt-14 desktop:pl-32'>
    <h1 className="text-3xl text-Very_Dark_Blue_Light_text dark:text-White font-extrabold">{country.name.official}</h1>
    <div className='flex pt-6 flex-col justify-between desktop:w-[32vw] desktop:flex-row desktop:justify-between'>
        <div className='flex flex-col'>
            <p className="py-1 font-extrabold text-Very_Dark_Blue_Light_text dark:text-White">Native name: <span className="font-light text-Very_Dark_Blue_Light_text dark:text-White pl-2">{nativeName}</span></p>
            <p className="py-1 font-extrabold text-Very_Dark_Blue_Light_text dark:text-White">Population:<span className="font-light text-Very_Dark_Blue_Light_text dark:text-White pl-2">{population} </span></p>
            <p className="py-1 font-extrabold text-Very_Dark_Blue_Light_text dark:text-White">Region:<span className="font-light text-Very_Dark_Blue_Light_text dark:text-White pl-2">{country.region}</span></p>
            <p className="py-1 font-extrabold text-Very_Dark_Blue_Light_text dark:text-White">Sub Region:<span className="font-light text-Very_Dark_Blue_Light_text dark:text-White pl-2">{country.subregion} </span></p>
            <p className="py-1 font-extrabold text-Very_Dark_Blue_Light_text dark:text-White">Capital:<span className="font-light text-Very_Dark_Blue_Light_text dark:text-White pl-2">{country.capital?.toString()}</span></p>
        </div>
        <div className="mt-7">
            <p className="py-1 text-Very_Dark_Blue_Light_text dark:text-White font-extrabold">Top Level Domain: <span className="text-Very_Dark_Blue_Light_text dark:text-White font-light pl-2">{country.tld}</span></p>
            <p className="py-1 text-Very_Dark_Blue_Light_text dark:text-White font-extrabold">Currencies: <span className="text-Very_Dark_Blue_Light_text dark:text-White font-light pl-2">{currency}</span></p>
            <p className="py-1 text-Very_Dark_Blue_Light_text dark:text-White font-extrabold">Languages: <span className="text-Very_Dark_Blue_Light_text dark:text-White font-light pl-2">{languages}</span></p>
        </div>
    </div>
    <div className="pt-9">
        {country.borders && <Border borderCountries={country.borders} />}
    </div>
    </div> 
    </>
  )
}

export default CountryDetails
