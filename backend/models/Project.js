import mongoose from "mongoose";

const UserProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  workspace: { type: Schema.Types.ObjectId, ref: "Workspace", required: true }, // Reference to the workspace
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  members: [{ type: Schema.Types.ObjectId, ref: "User" }], // Users assigned to the project
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", UserProjectSchema);
export default Project;
