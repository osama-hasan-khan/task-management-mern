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

  completed: {
    type: Boolean,
    default: false,
  },
});

const UserTaskModel = mongoose.model("TaskModel", taskSchema);

export default UserTaskModel;
