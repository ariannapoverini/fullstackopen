import { WeatherWidget } from "./WeatherWidget";

export const CountryDetails = ({ country, widget }) => {
  const lat = country.latlng[0];
  const long = country.latlng[1];

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
      <WeatherWidget widget={widget} />
    </>
  );
};
