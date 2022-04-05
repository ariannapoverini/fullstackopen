export const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <p> Good: {good} </p>
      <p> Neutral: {neutral} </p>
      <p> Bad: {bad} </p>
      <p> Total: {total} </p>
      <p> Average: {good * 1 - (bad * 1) / (good + neutral + bad)}</p>
      <p> Positive: {(good / total) * 100}</p>
    </div>
  );
};
