export const addTask = (task) => ({
  type: "ADD",
  payload: task,
});

export const deleteTask = (id) => ({
  type: "DELETE",
  payload: id,
});

export const editTask = (task) => ({
  type: "EDIT",
  payload: task,
});
