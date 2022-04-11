export const Total = ({ courseinfo }) => (
  <p>
    Number of exercises:{" "}
    {courseinfo.map((parts) => parts.exercises).reduce((x, y) => x + y)}{" "}
  </p>
);
