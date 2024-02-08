import UserWorkspaceModel from "../models/userWorkspaceModel.js";

const createWorkSpace = async (req, res) => {
  try {
    const { name } = req.body;

    const ownerId = req.user._id;

    const workspace = new UserWorkspaceModel({ name, owner: ownerId });

    await workspace.save();

    res.status(201).json(workspace);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

export { createWorkSpace };
