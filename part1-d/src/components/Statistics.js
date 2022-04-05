import { StatisticLine } from "./StatisticLine";

export const Statistics = ({ good, neutral, bad, total }) => {
  if (total !== 0) {
    return (
      <div>
        <StatisticLine text={"Good"} value={good} />
        <StatisticLine text={"Neutral"} value={neutral} />
        <StatisticLine text={"Bad"} value={bad} />
        <StatisticLine text={"Total"} value={total} />
        <StatisticLine
          text={"Average"}
          value={good * 1 - (bad * 1) / (good + neutral + bad)}
        />
        <StatisticLine text={"Positive"} value={(good / total) * 100} />
      </div>
    );
  }
  return <p> No feedback given </p>;
};
