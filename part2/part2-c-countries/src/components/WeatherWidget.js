import { useEffect, useState } from "react";
import WeatherWidgetServices from "../services/WeatherServices";

export const WeatherWidget = ({ country }) => {
  const [weather, setNewWeather] = useState([]);
  const lat = country.latlng[0];
  const lng = country.latlng[1];
  const key = "c18a0c7c65e4a95b6d78deb048ca5262";

  useEffect(() => {
    WeatherWidgetServices.getWeatherWidget(lat, lng, key).then((weather) => {
      setNewWeather(weather);
      console.log(weather);
    });
  }, [lat, lng]);

  return (
    <>
      <p>
        {" "}
        Temperature in {country.name.common} is currently: {weather.main?.temp}{" "}
        degrees Celsius{" "}
      </p>
      <p> Wind is {weather.wind?.speed} m/s </p>
    </>
  );
};
