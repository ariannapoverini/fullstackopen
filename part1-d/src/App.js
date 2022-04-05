import { useState } from "react";
import { Display } from "./components/Display";
import { Button } from "./components/Button";
import { Title } from "./components/Title";

const App = () => {
  const title = {
    titles: ["give feedback", "statistics"],
  };
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Title text={title.titles[0]} />
      <Button onClick={handleGood} text={"Good"} />
      <Button onClick={handleNeutral} text={"Neutral"} />
      <Button onClick={handleBad} text={"Bad"} />
      <Title text={title.titles[1]} />
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
