export const filterData = (countryData, currentRegion, subRegion, input) => {
    const filteredData = countryData.filter((country) => { //Filter based on region
            const region = country.region.toLowerCase();
            const userRegion = currentRegion.toLowerCase();
            return region.includes(userRegion);
        })
        .filter((country) => { //Filter based on Input
            const name = country.name.common.toLowerCase();
            const userInput = input.toLowerCase();
            return name.includes(userInput);
        })
        .filter((country) => { //Filter based on Subregion
            if (!country.subregion) return true;
            else {
                const subregion = country.subregion.toLowerCase();
                const userSubregion = subRegion.toLowerCase();
                return subregion.includes(userSubregion);
            }
        })
    return filteredData;
}

export const sortData = (filteredData, sortType, sort) => {
    if (sortType !== '') { //Sorting the data 
        filteredData.sort((a, b) => {
            if (sortType === 'population') { //Sort by population
                if (sort === 'ascending') {
                    return a.population > b.population ? 1 : -1;
                }
                return a.population < b.population ? 1 : -1;
            } else { //Sort by area
                if (sort === 'ascending') {
                    return a.area > b.area ? 1 : -1;
                }
                return a.area < b.area ? 1 : -1;
            }
        })
    }
    return filteredData;
}