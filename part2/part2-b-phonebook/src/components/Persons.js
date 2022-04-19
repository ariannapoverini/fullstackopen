import { Button } from "./Button";
import phonebookService from "../services/PhonebookService";

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
                onClick={() => phonebookService.deletePerson(person.id)}
                delfunc={delfunc}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
