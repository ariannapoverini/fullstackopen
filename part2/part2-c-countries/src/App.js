import { useState, useEffect } from "react";
import { CountryList } from "./components/CountryList";

import CountryServices from "./services/CountriesServices";
import WeatherWidgetServices from "./services/WeatherServices";

function App() {
  const [countries, setNewCountries] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [weatherWidget, setWeatherWidget] = useState({});

  useEffect(() => {
    CountryServices.getCountries().then((countries) => {
      setNewCountries(countries);
    });
  }, []);

  useEffect(() => {
    const key = "dd83b3988962476bb0ca34554de7024a";
    WeatherWidgetServices.getWeatherWidget(-12, -77, key).then(
      (weatherWidget) => {
        setWeatherWidget(weatherWidget);
      }
    );
  }, []);

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
      <CountryList searchResult={searchResult} country={weatherWidget} />
    </>
  );
}

export default App;
