import axios from "axios";

const tasksAPI = axios.create({
  baseURL: "http://localhost:4000",
});

export const getTasks = async () => {
  const res = await tasksAPI.get("/tasks");
  return res.data;
};

export const createTask = (task) => {
  tasksAPI.post("/tasks", task);
};

export const deleteTask = (id) => {
  tasksAPI.delete(`/tasks/${id}`);
};

export const updateTask = (task) => {
  tasksAPI.put(`/tasks/${task.id}`, task);
};
