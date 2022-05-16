import axios from "axios";

const phonebookUrl = "http://localhost:3001/api/persons";

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
  return axios.put(`${phonebookUrl}/${id}`, personObject);
};

const phonebookService = {
  getPersons,
  addNewPerson,
  deletePerson,
  changePerson,
};

export default phonebookService;
