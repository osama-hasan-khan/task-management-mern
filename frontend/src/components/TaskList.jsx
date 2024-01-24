import React from "react";
import { toast } from "react-toastify";

const TaskList = ({ task }) => {
  const formattedSpecificDate = new Date(task.dueDate)
    .toISOString()
    .slice(0, 10);

  const markTaskAsCompleted = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/markAsACompleted/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return toast.error("Failed to fetch tasks");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow bg-white mb-2">
        <div className="px-3 py-3">
          <div className="text-zinc-950 font-myFont tracking-widest">
            {task.title}
          </div>
          <p className="text-gray-600 tracking-tighter mb-1">
            {task.description}
          </p>
          <p className="text-gray-700 mb-2 font-myFifthFont">
            Due Date: {formattedSpecificDate}
          </p>
          <p className="text-gray-800 font-myFifthFont mb-1.5">
            Priority: {task.priorityLevel}
          </p>

          {task.status !== "completed" && (
            <button
              className="bg-green-800 px-3 py-1 font-myFifthFont  text-white rounded-md"
              onClick={() => markTaskAsCompleted(task._id)}
            >
              Mark As Completed
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskList;
