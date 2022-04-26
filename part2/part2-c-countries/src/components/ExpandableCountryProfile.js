import { Button } from "./Button";
import { CountryDetails } from "./CountryDetails";
import { useState } from "react";

export const ExpandableCountryProfile = ({ country, widget }) => {
  const [show, setShowDetails] = useState(false);
  return (
    <li key={country.name.official}>
      {country.name.common}
      <Button onClick={() => setShowDetails(!show)} text={"show"} />
      {show ? <CountryDetails country={country} widget={widget} /> : null}
    </li>
  );
};
