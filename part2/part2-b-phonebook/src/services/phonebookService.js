import axios from "axios";

const phonebookUrl = "http://localhost:3002/persons";

const getPersons = () => {
  return axios.get(phonebookUrl);
};

const addNewPerson = (personObject) => {
  return axios.post(phonebookUrl, personObject);
};

const phonebookService = { getPersons, addNewPerson };

export default phonebookService;
