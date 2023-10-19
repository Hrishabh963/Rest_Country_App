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

//Function to  fetch individual country
export const fetchCountryData = async(id) => {
    try {
        const response = await axios.get(`${baseURL}/alpha/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}