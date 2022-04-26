export const WeatherWidget = ({ widget }) => {
  return (
    <div>
      <h3> Weather:</h3>
      <p>Temperature: {widget.main.temp}</p>
    </div>
  );
};
