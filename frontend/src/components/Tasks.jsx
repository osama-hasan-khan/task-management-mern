import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TaskList from "./TaskList";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineRefresh } from "react-icons/hi";
import Loading from "./Loading";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [taskCounts, setTaskCounts] = useState({
    backlog: 0,
    todo: 0,
    inprogress: 0,
    notstarted: 0,
    completed: 0,
  });

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
      } finally {
        setLoading(false);
      }
    };

    fetchAllTaks();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const renderTasksByStatus = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => <TaskList key={task._id} task={task} />);
  };

  useEffect(() => {
    const countingEachTask = async () => {
      try {
        const response = await fetch(`/api/tasks/status/count`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        setTaskCounts(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    countingEachTask();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-myFifthFont text-2xl">✍️ Personal Tasks Board</h1>

        <div className="flex gap-5 items-center">
          <Link
            to="/create-task"
            className="bg-blue-600 text-white py-1 px-2 flex items-center gap-1 font-myFifthFont rounded"
          >
            <FaPlus />
            New Task
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

      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="grid grid-cols-5 gap-2 justify-items-center mt-5 mb-3">
            <div className="p-3 border-2 border-dashed border-zinc-300 rounded-md">
              <div className="flex items-center justify-between gap-2">
                <h2 className="mb-2 font-myFifthFont bg-red-500 text-white rounded-md px-5 py-1">
                  Todo
                </h2>

                <span className="mb-2 font-mySeventhFont bg-red-500 text-white px-2.5 py-1  rounded-full">
                  {taskCounts.todo.length === 0 ? 0 : taskCounts.todo}
                </span>
              </div>
              {renderTasksByStatus("todo")}
              <Link
                to="/create-task"
                className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
              >
                <FaPlus />
                Add Task
              </Link>
            </div>

            <div className="p-3 border-2 border-dashed border-zinc-300 rounded-md w-fit">
              <div className="flex items-center justify-between gap-2">
                <h2 className="mb-2 font-myFifthFont bg-yellow-500 rounded-md px-5 py-1 text-white">
                  In Progress
                </h2>
                <span className="mb-2 font-mySeventhFont bg-yellow-500 text-white px-2.5 py-1  rounded-full">
                  {taskCounts.inprogress.length === 0
                    ? 0
                    : taskCounts.inprogress}
                </span>
              </div>
              {renderTasksByStatus("inprogress")}
              <Link
                to="/create-task"
                className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
              >
                <FaPlus />
                Add Task
              </Link>
            </div>

            <div className="p-3 border-2 border-dashed border-zinc-300 rounded-md">
              <div className="flex items-center justify-between gap-2">
                <h2 className="mb-2 font-myFifthFont bg-black text-white px-5 py-1 rounded-md">
                  Backlog
                </h2>
                <span className="mb-2 font-mySeventhFont bg-black text-white px-2.5 py-1  rounded-full">
                  {taskCounts.backlog.length === 0 ? 0 : taskCounts.backlog}
                </span>
              </div>
              {renderTasksByStatus("backlog")}
              <Link
                to="/create-task"
                className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
              >
                <FaPlus />
                Add Task
              </Link>
            </div>

            <div className="p-3 border-2 border-dashed border-zinc-300 rounded-md">
              <div className="flex items-center justify-between gap-2">
                <h2 className="mb-2 font-myFifthFont bg-orange-400 text-white px-5 py-1 rounded-md">
                  Not Started
                </h2>
                <span className="mb-2 font-mySeventhFont bg-orange-500 text-white px-2.5 py-1  rounded-full">
                  {taskCounts.notstarted.length === 0
                    ? 0
                    : taskCounts.notstarted}
                </span>
              </div>
              {renderTasksByStatus("notstarted")}
              <Link
                to="/create-task"
                className="text-blue-800 flex items-center justify-center gap-1 font-myFifthFont"
              >
                <FaPlus />
                Add Task
              </Link>
            </div>

            <div className="p-3 border-2 border-dashed border-zinc-300 rounded-md">
              <div className="flex items-center justify-between gap-2">
                <h2 className="mb-2 font-myFifthFont bg-green-500 text-white px-5 py-1 rounded-md">
                  Completed
                </h2>
                <span className="mb-2 font-mySeventhFont bg-green-500 text-white px-2.5 py-1  rounded-full">
                  {taskCounts.completed.length === 0 ? 0 : taskCounts.completed}
                </span>
              </div>
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
      )}
    </>
  );
};

export default Tasks;
