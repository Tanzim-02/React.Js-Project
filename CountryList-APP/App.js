import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './Country-APP/Countries';

import './App.css'
import Search from './Country-APP/Search';

const url = "https://restcountries.com/v3.1/all";

function App() {

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const errorMessage = new Error ("Data is not Fetched.....")

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await axios(url);
      const data = await response.data;
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(errorMessage);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country) => {
      return country.name.common !== name;
    })
    setFilteredCountries(filter);
  }

  const handleSearch = (search) => {
    let value = search.toLowerCase();

    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });

    setFilteredCountries(newCountries)
  }

  console.log(error);

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading......</h2>}
      {error && <h2>{error.message}</h2>}

      {filteredCountries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
    </>
  )
}

export default App;
