import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewName = (event) => {
    event.preventDefault();
    setPersons(persons.concat(newPerson));
    setNewName("");
  };

  const addPerson = (event) => {
    setNewName(event.target.value);
  };

  const newPerson = {
    name: newName,
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={addPerson} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name} style={{ listStyle: "numbers" }}>
            {person.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
