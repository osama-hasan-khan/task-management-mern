// src/components/TaskList.js
import React from "react";

const TaskList = ({ task }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{task.title}</div>
        <p className="text-gray-700 text-base mb-2">
          Description: {task.description}
        </p>
        <p className="text-gray-700 text-base mb-2">Due Date: {task.dueDate}</p>
        <p className="text-gray-700 text-base mb-2">
          Priority: {task.priority}
        </p>
        <p className="text-gray-700 text-base mb-2">Status: {task.status}</p>
      </div>
    </div>
  );
};

export default TaskList;
