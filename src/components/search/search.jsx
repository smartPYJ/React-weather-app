import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Geo_URL, geoApiOptions } from "../../api";
import "./search.css";


const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${Geo_URL}/cities?minpopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      // const response = await fetch(Geo_URL, geoApiOptions);
      const result = await response.json();
      //  console.log(result.data);

      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
   <div className=" ">
      <AsyncPaginate
       
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />

     
    </div>
  );
};

export default Search;
