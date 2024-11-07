import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  workspaces: [{ type: mongoose.Schema.Types.ObjectId, ref: "Workspace" }], 
  role: { type: String, enum: ["admin", "member"], default: "member" }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

export default User;
