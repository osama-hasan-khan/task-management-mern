import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TaskList from "./TaskList";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineRefresh } from "react-icons/hi";

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

  const handleRefresh = () => {
    // Reload the page
    window.location.reload();
  };

  const renderTasksByStatus = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => <TaskList key={task.id} task={task} />);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-myFifthFont text-2xl">✍️ Personal Tasks Board</h1>
        <div className="flex gap-5 items-center">
          <Link
            to="/create-task"
            className="bg-black text-white p-1.5 flex items-center gap-2 font-myFifthFont rounded"
          >
            <FaPlus size={22} />
            Create Task
          </Link>
          <button
            onClick={handleRefresh}
            className="bg-green-500 text-white p-1.5 rounded font-myFifthFont flex items-center gap-1"
          >
            <HiOutlineRefresh size={22} />
            Refresh Page
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 justify-items-center mt-5 mb-3">
        <div className="bg-zinc-50 p-3 border-2 border-dotted border-zinc-300 rounded-md">
          <h2 className="mb-4 font-myFifthFont bg-red-500 text-white rounded-md px-5 py-1">
            Todo
          </h2>
          {renderTasksByStatus("todo")}
          <Link
            to="/create-task"
            className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
          >
            <FaPlus />
            Add Task
          </Link>
        </div>
        <div className="bg-zinc-50 p-3 border-2 border-dotted border-zinc-300 rounded-md">
          <h2 className="mb-4 font-myFifthFont bg-yellow-500 rounded-md px-5 py-1 text-white">
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
        <div className="bg-zinc-50 p-3 border-2 border-dotted border-zinc-300 rounded-md">
          <h2 className="mb-4 font-myFifthFont bg-black text-white px-5 py-1 rounded-md">
            Backlog
          </h2>
          {renderTasksByStatus("backlog")}
          <Link
            to="/create-task"
            className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
          >
            <FaPlus />
            Add Task
          </Link>
        </div>
        <div className="bg-zinc-50 p-3 border-2 border-dotted border-zinc-300 rounded-md">
          <h2 className="mb-4 font-myFifthFont bg-orange-400 text-white px-5 py-1 rounded-md">
            Not Started
          </h2>
          {renderTasksByStatus("not started")}
          <Link
            to="/create-task"
            className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
          >
            <FaPlus />
            Add Task
          </Link>
        </div>
        <div className="bg-zinc-50 p-3 border-2 border-dotted border-zinc-300 rounded-md">
          <h2 className="mb-4 font-myFifthFont bg-green-500 text-white px-5 py-1 rounded-md">
            Completed
          </h2>
          {renderTasksByStatus("completed")}
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
