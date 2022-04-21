import { useState, useEffect } from "react";

import "./App.css";
import countryServ from "./services/CountriesServices";

function App() {
  const [countries, setNewCountries] = useState([]);

  useEffect(() => {
    countryServ.getCountries().then((countries) => {
      setNewCountries(countries);
    });
  }, []);

  return (
    <>
      <form>
        Search for a country <input type="text" name="country"></input>
      </form>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            {country.name.common} <button> For later </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
