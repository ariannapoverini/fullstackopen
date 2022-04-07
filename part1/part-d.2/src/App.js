import { useState } from "react";
import { Button } from "./components/Button";
import { Votes } from "./components/Votes";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const startingArray = new Uint8Array(7);
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState([...startingArray]);
  const nextAnecdote = () => setSelected(Math.floor(Math.random() * 7));

  const upvote = () =>
    setVote(() => {
      votes[selected] += 1;
      return [...votes];
    });

  return (
    <>
      <h1> Anectode of the day </h1>
      <div>
        {anecdotes[selected]}
        <Votes votes={votes[selected]} />
      </div>
      <div>
        <Button onClick={nextAnecdote} text={"Random wisdom"} />
        <Button onClick={upvote} text={"Upvote this anecdote"} />
      </div>
      <h1> Anectode with most votes </h1>
      <div>
        {anecdotes[votes.indexOf(Math.max(...votes))]}
        <Votes votes={Math.max(...votes)} />
      </div>
    </>
  );
};

export default App;
