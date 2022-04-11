import { Part } from "./Part";
export const Content = ({ courseinfo }) => (
  <>
    {courseinfo.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);
