// TaskCard.js

const TaskCard = ({ task }) => {
  const { title, description, dueDate, priority, status, assignees, tags } =
    task;

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span
          className={`px-2 py-1 text-xs font-semibold rounded ${
            priority === "High"
              ? "bg-red-500 text-white"
              : priority === "Medium"
              ? "bg-yellow-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {priority}
        </span>
      </div>
      <p className="text-gray-500 text-sm mt-1">{description}</p>

      <div className="mt-2 text-gray-600 text-sm">
        <span className="font-semibold">Due:</span>
        {new Date(dueDate).toLocaleDateString()}
      </div>

      <div className="flex flex-wrap gap-1 mt-2">
        {tags?.map((tag) => (
          <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex mt-2">
        {assignees?.map((assignee) => (
          <img
            key={assignee.id}
            src={assignee.avatar}
            alt={assignee.name}
            className="w-6 h-6 rounded-full border-2 border-white -ml-2"
          />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button className="text-blue-500 text-sm">Edit</button>
        <button className="text-green-500 text-sm">Mark as Complete</button>
      </div>
    </div>
  );
};

export default TaskCard;
