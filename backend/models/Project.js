import mongoose from "mongoose";

const UserProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserProjectSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "project",
});

const Project = mongoose.model("Project", UserProjectSchema);
export default Project;
