import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, PlusIcon, XIcon } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modelSlice";

const CreateUserTask = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignees, setAssignees] = useState([]);
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState();
  const [subtasks, setSubtasks] = useState([""]);

  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.modal);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, assignees, priority, dueDate, subtasks });
    // setIsOpen(false);
    dispatch(closeModal());
  };

  const addSubtask = () => {
    setSubtasks([...subtasks, ""]);
  };

  const removeSubtask = (index) => {
    const newSubtasks = subtasks.filter((_, i) => i !== index);
    setSubtasks(newSubtasks);
  };

  const updateSubtask = (index, value) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index] = value;
    setSubtasks(newSubtasks);
  };

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch(closeModal())}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed  z-50 flex items-center justify-center overflow-auto p-4"
            >
              <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
                <div className="sticky top-0 bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Create New Task
                  </h2>
                  <button
                    onClick={() => dispatch(closeModal())}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label="Close"
                  >
                    <XIcon size={24} />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="assignees"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Assignees
                    </label>
                    <input
                      id="assignees"
                      type="text"
                      value={assignees.join(", ")}
                      onChange={(e) =>
                        setAssignees(
                          e.target.value.split(",").map((s) => s.trim())
                        )
                      }
                      placeholder="Enter assignees separated by commas"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="priority"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Priority
                      </label>
                      <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="dueDate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Due Date
                      </label>
                      <div className="relative">
                        <DatePicker
                          selected={dueDate}
                          onChange={(date) => setDueDate(date)}
                          dateFormat="MMMM d, yyyy"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          customInput={
                            <div className="flex items-center">
                              <input
                                type="text"
                                readOnly
                                placeholder="Select a date"
                                className="w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                              />
                              <CalendarIcon
                                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={20}
                              />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subtasks
                    </label>
                    <div className="space-y-2">
                      {subtasks.map((subtask, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="text"
                            value={subtask}
                            onChange={(e) =>
                              updateSubtask(index, e.target.value)
                            }
                            placeholder={`Subtask ${index + 1}`}
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => removeSubtask(index)}
                            className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                          >
                            <XIcon size={20} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addSubtask}
                        className="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <PlusIcon className="h-5 w-5 mr-2 text-gray-400" />
                        Add Subtask
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Create Task
                    </button>
                  </div>
                </form>
              </div>
            </motion.div> 
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreateUserTask;
