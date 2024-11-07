import User from "../models/User.js";
import UserWorkspaceModel from "../models/Workspace.js";

const createWorkSpace = async (req, res) => {
  try {
    const { name, description } = req.body;

    const userId = req.user._id;

    const workspace = new UserWorkspaceModel({
      name,
      description,
      owner: userId,
      members: [userId],
    });

    const savedWorkspace = await workspace.save();

    await User.findByIdAndUpdate(userId, {
      $push: { workspaces: savedWorkspace._id },
    });

    res.status(201).json(savedWorkspace);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

export { createWorkSpace };
