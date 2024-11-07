import mongoose from "mongoose";

const WorkspaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const UserWorkspaceModel = mongoose.model("Workspace", WorkspaceSchema);

export default UserWorkspaceModel;
