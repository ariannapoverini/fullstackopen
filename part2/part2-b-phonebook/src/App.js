import { useState, useEffect, React } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import phonebookService from "./services/PhonebookService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterKey, setNewFilter] = useState([]);

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
    phonebookService.getPersons().then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const checkPerson = (person) => persons.map((p) => p.name).includes(person);

  const handleChange = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (checkPerson(newName)) {
      const modifyPerson = persons.find((p) => p.name === newName);

      const peopleWithPersonModify = persons.filter(
        (p) => p.number !== newNumber
      );

      if (
        window.confirm(
          `You are about to change ${modifyPerson.name}'s number. Are you sure?`
        )
      ) {
        phonebookService
          .changePerson(modifyPerson.id, personObject)
          .then((res) => {
            if (res.status !== 200) {
              return;
            } else if (res.status === 200) {
              return phonebookService.getPersons().then((response) => {
                setNewFilter(response.data);
              });
            }
          });
      }
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");

      phonebookService.addNewPerson(personObject).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
      });
    }
  };

  const delPerson = (id, people) => {
    if (
      window.confirm(`Do you really want to to delete the user number ${id}?`)
    ) {
      phonebookService.deletePerson(id).then(() => {
        const peopleWithPersonDeleted = people.filter((p) => p.id !== id);
        setPersons(peopleWithPersonDeleted);
        setNewFilter(peopleWithPersonDeleted);
      });
    }
  };

  const filterName = (search) => persons.filter((f) => f.name.includes(search));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={addFilter} />
      <PersonForm
        handleChange={handleChange}
        newName={newName}
        addPerson={addPerson}
        newNumber={newNumber}
        addNumber={addNumber}
      />
      <h2>Numbers</h2>
      <Persons filterKey={filterKey} delfunc={delPerson} />
    </div>
  );
};

export default App;
