import { CountryDetails } from "./CountryDetails";
import { Button } from "./Button";
import { useState } from "react";

export const CountryList = ({ searchResult }) => {
  if (searchResult.length >= 10) {
    return (
      <ul>
        <li>Make your search more specific</li>
      </ul>
    );
  } else if (searchResult.length === 1) {
    return <CountryDetails country={searchResult[0]} />;
  } else {
    return (
      <ul>
        {searchResult.map((country) => (
          <ExpandableCountryProfile country={country} />
        ))}
      </ul>
    );
  }
};

const ExpandableCountryProfile = ({ country }) => {
  const [show, setShowDetails] = useState(false);
  return (
    <li key={country.name.official}>
      {country.name.common}{" "}
      <Button onClick={() => setShowDetails(!show)} text={"show"} />
      {show ? <CountryDetails country={country} /> : null}
    </li>
  );
};
