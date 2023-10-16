import { useEffect, useState ,useRef} from 'react'
import CountriesContainer from './CountriesContainer';
import Input from './Input';
import Loading from './Loading';
import SearchError from './SearchError';
import Error from './Error';
import { fetchAllCountries,fetchCountriesByRegion } from './apiService';

const Main = () => {
  // State variables
  const [countryData, setCountryData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [input, setInput] = useState('');
  const [currentRegion, setRegion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    errorMessage: undefined
  });
  const initial = useRef(true);

  // Handle input change
  const handleChange = (value) => {
    setInput(value);
  }

  // Handle region selection
  const handleSelect = (value) => {
    setRegion(value);
  }

  // Fetch country data
  useEffect(() => {
    setLoading(true);
    setError({ error: false });

    if (initial.current) {
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
    } else if (currentRegion !== '') {
      // Fetch data based on region selection
      fetchCountriesByRegion(currentRegion)
        .then(data => {
          setLoading(false);
          setCountryData(data);
        })
        .catch(error => {
          setLoading(false);
          setError({ error: true, errorMessage: error.message });
        });
    }
  }, [currentRegion]);

  // Filter country data based on user input
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
    } else {
      setLoading(true);
      if (input !== '') {
        // Filter the data based on user input
        const newData = countryData.filter(country => {
          const countryName = country.name.official.toLowerCase();
          const inp = input.toLowerCase();
          return countryName.includes(inp);
        });
        setFilterData(newData);
        setLoading(false);
      } else {
        // Clear the filter if input is empty
        setFilterData([]);
        setLoading(false);
      }
    }
  }, [input, countryData]);

 // JSX rendering logic
  return (
    <>
    <main className='bg-Very_Light_Gray min-h-screen w-screen pl-4 dark:bg-Very_Dark_Blue'>

    <Input handleChange={handleChange} handleSelect={handleSelect} />

    {loading ? <Loading /> : null}

    {error.error ? <Error message={error.errorMessage} /> : null}

    {filterData.length === 0 && input!=='' && <SearchError />}

    <div className='flex flex-col items-center  w-screen desktop:items-stretch desktop:flex-row desktop:flex-wrap desktop:mt-0 desktop:mb-0 desktop:ml-auto desktop:mr-auto desktop:pl-8'>
      {filterData.length === 0 && input==='' && countryData.length>0 && <CountriesContainer countryData={countryData} />}
      {filterData.length>0 && input!=='' && <CountriesContainer countryData={filterData} /> }
    </div>
    
    </main>
    </>
    
  )
}

export default Main
