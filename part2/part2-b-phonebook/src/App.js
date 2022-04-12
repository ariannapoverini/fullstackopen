import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterKey, setNewFilter] = useState("");

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

  const filterName = (search) => persons.filter((f) => f.name.includes(search));

  const addPerson = (event) => {
    setNewName(event.target.value);
  };

  const addNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const addFilter = (event) => {
    setNewFilter(filterName(event.target.value));
  };

  const newPerson = {
    name: newName,
    number: newNumber,
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={addFilter} />
      </div>
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
      {filterKey.length !== 0 && (
        <ul>
          {filterKey.map((person) => (
            <li key={person.name} style={{ listStyle: "numbers" }}>
              {person.name} {person.number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
