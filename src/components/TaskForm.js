import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";

import { v4 as uuid } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "../redux/actions";

const TaskForm = () => {
  const [task, setTask] = useState({
    id: -1,
    title: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      title: e.target.value,
    });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(
        editTask({
          id: params.id,
          title: task.title,
        })
      );
    } else {
      dispatch(addTask(task));
    }
    navigate("/redux");
  };

  useEffect(() => {
    if (params.id) {
      console.log(tasks.find((task) => task.id == params.id));
      setTask(tasks.find((task) => task.id == params.id));
    }
  }, [params.id]);

  console.log(params.id);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action=""
        onSubmit={handleSumit}
        className="bg-zinc-800 max-w-sm p-4 mb-2"
      >
        <label htmlFor="title" className="block text-xs font-bold my-2">
          Title:
        </label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
          value={task.title}
          className="w-full p-2 rounded-md bg-zinc-600 md-2"
          required
        />
        <button className="bg-indigo-600 px-2 py-1 mt-3">save</button>
        <Link to="/redux" className="text-white">
          salir
        </Link>
      </form>
    </div>
  );
};

export default TaskForm;
