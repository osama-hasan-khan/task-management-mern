import mongoose from "mongoose";

const UserCommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  task: { type: Schema.Types.ObjectId, ref: "Task", required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

const UserCommentModel = mongoose.model("Comment", UserCommentSchema);

export default UserCommentModel;
