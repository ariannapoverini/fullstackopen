import { WeatherWidget } from "./WeatherWidget";

export const CountryDetails = ({ country }) => {
  return (
    <>
      <h2>{country.name.official}</h2>
      <ul>
        <li> Capital: {country.capital}</li>
        <li> Area: {country.area}</li>
      </ul>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((languages) => (
          <li key={languages}>{languages}</li>
        ))}
      </ul>
      <br />
      <img src={country.flags.png} alt="flag" />
      <WeatherWidget country={country} />
    </>
  );
};
