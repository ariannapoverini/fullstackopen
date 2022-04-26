import axios from "axios";

const getWeatherWidget = (lat, lon, key) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
  );
  return request.then((response) => response.data);
};

const WeatherWidgetServices = { getWeatherWidget };

export default WeatherWidgetServices;
