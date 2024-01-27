const workspaceSchema = new mongoose.Schema({
  name: String,
});

const UserWorkSpaceModel = mongoose.model("Workspace", workspaceSchema);

export default UserWorkSpaceModel;
