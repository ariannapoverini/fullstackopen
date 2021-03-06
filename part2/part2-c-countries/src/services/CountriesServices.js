import axios from "axios";

const getCountries = () => {
  const request = axios.get(`https://restcountries.com/v3.1/all`);
  return request.then((response) => response.data);
};

const CountriesServices = { getCountries };

export default CountriesServices;
