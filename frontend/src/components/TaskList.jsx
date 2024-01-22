import React from "react";

const TaskList = ({ task }) => {
  const formattedSpecificDate = new Date(task.dueDate)
    .toISOString()
    .slice(0, 10);

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow bg-white mb-4">
        <div className="px-6 py-4">
          <div className="text-xl mb-2 font-myFont tracking-wider">
            {task.title}
          </div>
          <p className="text-gray-600  tracking-tighter mb-2">
            {task.description}
          </p>
          <p className="text-gray-700 font-myFifthFont mb-2">
            Due Date: {formattedSpecificDate}
          </p>
          <p className="text-gray-500 font-myFifthFont mb-2">
            Priority: {task.priorityLevel}
          </p>
        </div>
      </div>
    </>
  );
};

export default TaskList;
