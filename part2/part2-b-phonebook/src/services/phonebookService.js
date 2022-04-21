import axios from "axios";

const phonebookUrl = "http://localhost:3002/persons";

const getPersons = () => {
  return axios.get(phonebookUrl);
};

const addNewPerson = (personObject) => {
  return axios.post(phonebookUrl, personObject);
};

const deletePerson = (id) => {
  const request = axios.delete(`${phonebookUrl}/${id}`);
  return request.then((response) => response.data);
};

const changePerson = (id, personObject) => {
  const request = axios.put(`${phonebookUrl}/${id}`, personObject);
  return request.then((response) => response.data);
};

const phonebookService = {
  getPersons,
  addNewPerson,
  deletePerson,
  changePerson,
};

export default phonebookService;
