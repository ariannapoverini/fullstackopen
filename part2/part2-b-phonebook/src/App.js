import axios from "axios";
import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  useEffect(() => {
    console.log("effect loaded");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

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
