import { useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";

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

  const checkPerson = (person) => persons.map((p) => p.name).includes(person);

  const addNewName = (event) => {
    event.preventDefault();

    if (checkPerson(newName)) {
      alert(`${newName} is already registered`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const filterName = (search) => persons.filter((f) => f.name.includes(search));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={addFilter} />
      <PersonForm
        addNewName={addNewName}
        newName={newName}
        addPerson={addPerson}
        newNumber={newNumber}
        addNumber={addNumber}
      />
      <h2>Numbers</h2>
      <Persons filterKey={filterKey} />
    </div>
  );
};

export default App;
