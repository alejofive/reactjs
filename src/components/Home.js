import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../redux/actions";

const Home = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks {tasks.length}</h1>
        <Link
          to="/redux/form"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-6 gap-3">
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              className="bg-neutral-800 p-4 rounded-md col-span-2"
            >
              <header className="flex justify-between">
                <h3 className="text-white text-xs">{task.title}</h3>
                <div className="flex gap-x-2 ">
                  <Link
                    to={`/redux/edit/${task.id}`}
                    className="bg-zinc-600 px-1  text-sm rounded-md flex items-center"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 px-1 text-sm rounded-md"
                  >
                    delete
                  </button>
                </div>
              </header>
              <p>{task.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
