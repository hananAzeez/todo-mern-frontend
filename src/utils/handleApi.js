import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAllTodo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ---> ", data);
    setTodo(data);
  });
};

const createTodo = (formData, setFormData, setTodo) => {
  axios.post(`${baseUrl}/create`, formData).then((data) => {
    console.log(data);
    setFormData({});
    getAllTodo(setTodo);
  });
};

const deleteTodo = (_id, setTodo) => {
  axios.delete(`${baseUrl}/delete`, { data: { _id } }).then((data) => {
    console.log(data);
    getAllTodo(setTodo);
  });
};

const updateTodo = (formData, setFormData, setTodo) => {
  axios.put(`${baseUrl}/update`, { formData }).then((data) => {
    console.log(data);
    getAllTodo(setTodo);
    setFormData({});
  });
};
export { getAllTodo, createTodo, updateTodo, deleteTodo };
