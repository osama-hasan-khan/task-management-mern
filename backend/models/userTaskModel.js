import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  dueDate: {
    type: Date,
    required: true,
  },

  priorityLevel: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },

  status: {
    type: String,
    enum: ["backlog", "todo", "inprogress", "notstarted", "completed"],
    default: "todo",
  },

  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
  },
});

const UserTaskModel = mongoose.model("TaskModel", taskSchema);

export default UserTaskModel;
