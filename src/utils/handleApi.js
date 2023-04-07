import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAllTodo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ---> ", data);
    setTodo(data);
  });
};

const createTodo = (formData, setTodo) => {
  axios.post(`${baseUrl}/create`, formData).then((data) => {
    console.log(data);
    getAllTodo(setTodo);
  });
};

const deleteTodo = (_id, setTodo) => {
  axios.delete(`${baseUrl}/delete`, { data: { _id } }).then((data) => {
    console.log(data);
    getAllTodo(setTodo);
  });
};

const updateTodo = (formData, setTodo) => {
  axios.post(`${baseUrl}/update`, { ...formData }).then((data) => {
    console.log(data);
    getAllTodo(setTodo);
  });
};
export { getAllTodo, createTodo, updateTodo, deleteTodo };
