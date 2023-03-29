import React from "react";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasks, deleteTask, updateTask } from "../api/tasksAPI";

const Tasks = () => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: tasks,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    select: (tasks) => tasks.sort((a, b) => b.id - a.id),
  });

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      console.log("task delete");
      queryClient.invalidateQueries("tasks");
    },
  });

  const updatetaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      console.log("task delete");
      queryClient.invalidateQueries("tasks");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error :{error.message}</div>;

  return (
    <div className="w-full">
      {tasks.map((task) => (
        <div key={task.id} className="flex mt-3 justify-between">
          <h3 className="font-bold">{task.name}</h3>
          <p>{task.id}</p>
          <div className="">
            <button
              onClick={() => deleteTaskMutation.mutate(task.id)}
              className="mr-5"
            >
              Delete
            </button>
            <input
              type="checkbox"
              checked={task.complete}
              onChange={(e) => {
                updatetaskMutation.mutate({
                  ...task,
                  complete: e.target.checked,
                });
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
