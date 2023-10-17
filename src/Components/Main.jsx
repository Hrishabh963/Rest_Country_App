import { useEffect, useState ,useRef} from 'react'
import CountriesContainer from './CountriesContainer';
import Input from './Input';
import Loading from './Loading';
import Error from './Error';
import { fetchAllCountries } from './apiService';

const Main = () => {
  // State variables
  const [countryData, setCountryData] = useState([]);
  const [input, setInput] = useState('');
  const [currentRegion, setRegion] = useState('');
  const [loading, setLoading] = useState(false);
  const [subRegion,setSubRegion] = useState('');
  const [error, setError] = useState({
    error: false,
    errorMessage: undefined
  });

  // Handle input change
  const handleChange = (value) => {
    setInput(value);
  }

  // Handle region selection
  const handleSelect = (value) => {
    setRegion(value);
    setSubRegion('')
  }

  //Handle subregion selection
  const handleSubRegionSelect = (value)=>{
    setSubRegion(value);
  }
  // Fetch country data
  useEffect(() => {
    setLoading(true);
    setError({ error: false });
      // Initial data fetch
      setTimeout(() => {
        fetchAllCountries()
          .then(data => {
            setLoading(false);
            setCountryData(data);
          })
          .catch(error => {
            setLoading(false);
            setError({ error: true, errorMessage: error.message });
          });
      }, 500);
  }, []);

  // Filter country data based on user input
  const filteredData = countryData.filter((country)=>{   //Filter based on region
      const region = country.region.toLowerCase();
      const userRegion = currentRegion.toLowerCase();
      return region.includes(userRegion);
    })
    .filter((country)=>{                                 //Filter based on Input
      const name = country.name.official.toLowerCase();
      const userInput = input.toLowerCase();
      return name.includes(userInput);
    })
    .filter((country)=>{                                //Filter based on Subregion
      if(!country.subregion) return true;
      else{
        const subregion = country.subregion.toLowerCase();
        const userSubregion = subRegion.toLowerCase();
        return subregion.includes(userSubregion);
      }
    })
    
 // JSX rendering logic
  return (
    <>
    <main className="bg-Very_Light_Gray min-h-screen w-screen pl-4 dark:bg-Very_Dark_Blue">

    <Input handleChange={handleChange} handleSelect={handleSelect} countryData={countryData} region={currentRegion} handleSubRegionSelect={handleSubRegionSelect} />

    {loading ? <Loading /> : null}

    {error.error ? <Error message={error.errorMessage} /> : null}

    {filteredData.length === 0 && countryData.length>0 && <Error message="Country Not Found" />}

    <div className="flex flex-col items-center  w-screen desktop:items-stretch desktop:flex-row desktop:flex-wrap desktop:mt-0 desktop:mb-0 desktop:ml-auto desktop:mr-auto desktop:pl-8">
      {countryData.length>0 && !error.error && <CountriesContainer countryData={filteredData} />}
    </div>
    
    </main>
    </>
    
  )
}

export default Main
