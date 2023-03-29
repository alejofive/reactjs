import React from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../api/tasksAPI";

const TaskFrom = () => {
  const queryClient = useQueryClient();

  const addTaskMutatio = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      console.log("task added");
      queryClient.invalidateQueries("tasks");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = Object.fromEntries(formData);
    addTaskMutatio.mutate({
      ...task,
      complete: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" className="mt-10" />

      <button>Add Task</button>
    </form>
  );
};

export default TaskFrom;
