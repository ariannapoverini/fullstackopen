export const Persons = ({ filterKey }) => {
  return (
    <>
      {filterKey.length !== 0 && (
        <ul>
          {filterKey.map((person) => (
            <li key={person.name} style={{ listStyle: "numbers" }}>
              {person.name} {person.number}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
