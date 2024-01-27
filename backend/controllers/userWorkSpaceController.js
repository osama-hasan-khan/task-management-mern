import UserWorkSpaceModel from "../models/userWorkSpaceModel";

const createWorkSpace = async (req, res) => {
  const { name } = req.body;
  try {
    const newWorkSpace = new UserWorkSpaceModel.create({ name });
    const savedNewWorkSpaceName = await newWorkSpace.save();

    if (savedNewWorkSpaceName) {
      return res
        .status(201)
        .json({ success: "successfully created your workspace" });
    }

    res.status(201).json(savedNewWorkSpaceName);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

export { createWorkSpace };
