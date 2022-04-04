import { useState } from "react";

// import { Header } from "./components/Header";
// import { Content } from "./components/Content";
// import { Total } from "./components/Total";
import { Hello } from "./components/Hello";
import { Display } from "./components/Display";
import { Button } from "./components/Button";
import { History } from "./components/History";

const App = () => {
  const name = "Peter";
  const age = 10;

  // const { counter } = props;           and App = (props) => {}

  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [value, setValue] = useState(10);

  const handleClick = () => {
    console.log("clicked the button");
    setValue(0);
  };

  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0,
  // });

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };
  // const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };
  // const handleRightClick = () =>
  //   setClicks({ ...clicks, right: clicks.right + 1 });

  console.log("rendering...", counter);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />{" "}
      <Button onClick={setToZero} text="zero" />{" "}
      <Button onClick={decreaseByOne} text="minus" />
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>
      <History allClicks={allClicks} />
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  );
};

// The code for exercises from part 1.1 - 1.3
// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };

//   return (
//     <>
//       <Header course={course.name} />
//       <Content
//         part1={course.parts[0].name}
//         exercises1={course.parts[0].exercises}
//         part2={course.parts[1].name}
//         exercises2={course.parts[1].exercises}
//         part3={course.parts[2].name}
//         exercises3={course.parts[2].exercises}
//       />
//       <Total
//         exercises1={course.parts[0].exercises}
//         exercises2={course.parts[1].exercises}
//         exercises3={course.parts[2].exercises}
//       />
//     </>
//   );
// };

export default App;
