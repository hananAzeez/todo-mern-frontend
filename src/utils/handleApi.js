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
export { getAllTodo, createTodo };
