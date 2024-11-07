import mongoose from "mongoose";

const UserTaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
  assignees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  status: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo",
  },
  dueDate: { type: Date },
  subtasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subtask" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const UserTaskModel = mongoose.model("Task", UserTaskSchema);

export default UserTaskModel;
