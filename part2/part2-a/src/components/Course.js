import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

export const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content courseinfo={course.parts} />
    <Total courseinfo={course.parts} />
  </>
);
