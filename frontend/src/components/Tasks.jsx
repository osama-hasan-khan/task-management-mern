import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TaskList from "./TaskList";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchAllTaks = async () => {
      try {
        const response = await fetch("/api/tasks/getAllTasks", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (!response.ok) {
          return toast.error("Failed to fetch tasks");
        }

        setTasks(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchAllTaks();
  }, []);

  const renderTasksByStatus = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => <TaskList key={task.id} task={task} />);
  };

  return (
    <>
      <h1 className="font-myFifthFont text-2xl">Tasks</h1>
      <div className="grid grid-cols-4 gap-2 justify-items-center p-10 mb-3">
        <div className="bg-zinc-50 p-3">
          <h2 className="text-2xl font-bold mb-4 font-myFifthFont">Todo</h2>
          {renderTasksByStatus("todo")}
          <Link
            to="/create-task"
            className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
          >
            <FaPlus />
            Add Task
          </Link>
        </div>
        <div className="bg-zinc-50 p-3">
          <h2 className="text-2xl font-bold mb-4 font-myFifthFont">
            In Progress
          </h2>
          {renderTasksByStatus("inprogress")}
          <Link
            to="/create-task"
            className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
          >
            <FaPlus />
            Add Task
          </Link>
        </div>
        <div className="bg-zinc-50 p-3">
          <h2 className="text-2xl font-bold mb-4 font-myFifthFont">Backlog</h2>
          {renderTasksByStatus("backlog")}
          <Link
            to="/create-task"
            className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
          >
            <FaPlus />
            Add Task
          </Link>
        </div>
        <div className="bg-zinc-50 p-3">
          <h2 className="text-2xl font-bold mb-4 font-myFifthFont">Not Started</h2>
          {renderTasksByStatus("not started")}
          <Link
            to="/create-task"
            className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
          >
            <FaPlus />
            Add Task
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tasks;
