import { Button } from "./Button";

export const Persons = ({ filterKey, delfunc }) => {
  return (
    <>
      {filterKey.length !== 0 && (
        <ul>
          {filterKey.map((person) => (
            <li key={person.name} style={{ listStyle: "numbers" }}>
              {person.name} {person.number}
              <Button
                text="delete"
                onClick={() => {
                  delfunc(person.id, filterKey);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
