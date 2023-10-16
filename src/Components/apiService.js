import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1';

// Function to fetch all countries
export const fetchAllCountries = async() => {
    try {
        const response = await axios.get(`${baseURL}/all`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to fetch countries by region
export const fetchCountriesByRegion = async(region) => {
    try {
        const response = await axios.get(`${baseURL}/region/${region}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};