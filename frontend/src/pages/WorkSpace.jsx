import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { Plus, Lock, Globe, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeWorkspaceModal } from "../redux/workspaceSlice";

const WorkSpace = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("private");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isWorkspaceModalOpen } = useSelector((state) => state.workspace);

  if (!isWorkspaceModalOpen) return null;

  const CreateWorkspace = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api/workspace/createWorkspace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, visibility }),
      });

      if (response.ok) {
        toast.success("Workspace created successfully");
        navigate("/tasks");
      } else {
        toast.error("Failed to create workspace");
      }
    } catch (error) {
      toast.error(`Error during creation: ${error.message}`);
    }
  };

  return (
    <div>
      <AnimatePresence>
        {isWorkspaceModalOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch(closeWorkspaceModal())}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              {
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-2xl w-full mx-auto p-6">
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => dispatch(closeWorkspaceModal())}
                   >
                    <X className="w-6 h-6" />
                  </button>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Create New Workspace
                  </h2>
                  <form onSubmit={CreateWorkspace} className="space-y-6">
                    <div>
                      <label
                        htmlFor="workspace-name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Workspace Name
                      </label>
                      <input
                        type="text"
                        id="workspace-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Enter workspace name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="workspace-description"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Description
                      </label>
                      <textarea
                        id="workspace-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Describe your workspace"
                      />
                    </div>

                    <div className="flex space-x-4">
                      <motion.button
                        type="button"
                        onClick={() => setVisibility("private")}
                        className={`flex items-center px-4 py-2 rounded-md ${
                          visibility === "private"
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                        } transition-colors duration-200`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Lock className="w-5 h-5 mr-2" />
                        Private
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setVisibility("public")}
                        className={`flex items-center px-4 py-2 rounded-md ${
                          visibility === "public"
                            ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                        } transition-colors duration-200`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe className="w-5 h-5 mr-2" />
                        Public
                      </motion.button>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Create Workspace
                    </motion.button>
                  </form>
                </div>
              }
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkSpace;
