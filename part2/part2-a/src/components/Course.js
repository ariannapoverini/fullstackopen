import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

export const Course = ({ courses }) =>
  courses.map((course) => (
    <li key={course.id} style={{ listStyle: "none" }}>
      <Header course={course.name} />
      <Content courseinfo={course.parts} />
      <Total courseinfo={course.parts} />
    </li>
  ));
