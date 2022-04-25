import { useState, useEffect } from "react";
import { CountryList } from "./components/CountryList";

import CountryServices from "./services/CountriesServices";

function App() {
  const [countries, setNewCountries] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    CountryServices.getCountries().then((countries) => {
      setNewCountries(countries);
    });
  }, [searchResult]);

  const handleSearch = (event) => {
    event.preventDefault();

    const searchFilter = (search) =>
      countries.filter((f) => f.name.common.toLowerCase().includes(search));
    setSearchResult(searchFilter(event.target.value));
  };

  console.log(searchResult);

  return (
    <>
      <form>
        Search for a country
        <input type="text" name="country" onChange={handleSearch}></input>
      </form>
      <CountryList searchResult={searchResult} />
    </>
  );
}

export default App;
