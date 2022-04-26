import { CountryDetails } from "./CountryDetails";
import { ExpandableCountryProfile } from "./ExpandableCountryProfile";

export const CountryList = ({ searchResult, widget }) => {
  if (searchResult.length >= 10) {
    return (
      <ul>
        <li>Make your search more specific</li>
      </ul>
    );
  } else if (searchResult.length === 1) {
    return <CountryDetails country={searchResult[0]} widget={widget} />;
  } else {
    return (
      <ul>
        {searchResult.map((country) => (
          <ExpandableCountryProfile
            key={country.name.common}
            country={country}
            widget={widget}
          />
        ))}
      </ul>
    );
  }
};
