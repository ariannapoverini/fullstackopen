import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const checkPerson = (person) => persons.map((p) => p.name).includes(person);

  const addNewName = (event) => {
    event.preventDefault();
    if (checkPerson(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const addPerson = (event) => {
    setNewName(event.target.value);
  };

  const addNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const newPerson = {
    name: newName,
    number: newNumber,
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={addPerson} />
        </div>
        number: <input value={newNumber} onChange={addNumber} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name} style={{ listStyle: "numbers" }}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
