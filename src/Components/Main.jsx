import { useEffect, useState ,useRef} from 'react'
import CountriesContainer from './CountriesContainer';
import Input from './Input';
import Loading from './Loading';
import Error from './Error';
import { fetchAllCountries } from './apiService';
import Sort from './Sort';
import { filterData, sortData } from './utility';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  // State variables
  const [countryData, setCountryData] = useState([]);
  const [input, setInput] = useState('');
  const [currentRegion, setRegion] = useState('');
  const [loading, setLoading] = useState(false);
  const [subRegion,setSubRegion] = useState('');
  const [sort,setSort] = useState('ascending');
  const [sortType,setSortType] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState({
    error: false,
    errorMessage: undefined
  });

//Handle Navigation
const handleNavigation = (event)=>{
  const div = event.target.closest('.country_item');
  if(!div) return;
  const divId = div.id;
  navigate(`/country/${divId}`);
}

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

  //Toggling ascending or descending
  const toggleSort = (value)=>{
    setSort(value.toLowerCase());
  }

  //Toggling sort type

  const toggleSortType = (value)=>{
    setSortType(value.toLowerCase());
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
  let filteredData = filterData(countryData,currentRegion,subRegion,input);
  filteredData = sortData(filteredData,sortType,sort); 

 // JSX rendering logic
  return (
    <>
    <main className="bg-Very_Light_Gray min-h-screen w-screen pl-4 dark:bg-Very_Dark_Blue">

    {error.error ? <Error message={error.errorMessage} /> : null}

    {loading ? <Loading /> : null}
    
    {!loading && <Input handleChange={handleChange} handleSelect={handleSelect} countryData={countryData} region={currentRegion} handleSubRegionSelect={handleSubRegionSelect} toggleSort={toggleSort} />}

    {!loading && <Sort  toggleSort={toggleSort} toggleSortType={toggleSortType} />}

    {filteredData.length === 0 && countryData.length>0 && <Error message="Country Not Found" />}

    <section onClick={(event)=> handleNavigation(event)} className="flex flex-col items-center  w-[99vw] desktop:items-stretch desktop:flex-row desktop:flex-wrap desktop:mt-0 desktop:mb-0 desktop:ml-auto desktop:mr-auto desktop:pl-8">
      {countryData.length>0 && !error.error && <CountriesContainer countryData={filteredData} />}
    </section>
    
    </main>
    </>
    
  )
}

export default Main
