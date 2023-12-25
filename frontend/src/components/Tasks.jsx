import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TaskList from "./TaskList";

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
    <div className="flex justify-around p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Todo</h2>
        {renderTasksByStatus("todo")}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">In Progress</h2>
        {renderTasksByStatus("inprogress")}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Backlog</h2>
        {renderTasksByStatus("backlog")}
      </div>
    </div>
  );
};

export default Tasks;
