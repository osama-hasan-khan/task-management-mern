import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaskModel" }],
});

const UserWorkspaceModel = mongoose.model("Workspace", workspaceSchema);

export default UserWorkspaceModel;
