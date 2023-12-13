import asyncHandler from "../middlewares/asyncHandler.js";
import UserTaskModel from "../models/userTaskModel.js";

const createTask = asyncHandler(async (req, res) => {
  const { title, description, dueDate, priorityLevel } = req.body;
  const userId = req.user._id;

  try {
    const task = await UserTaskModel.create({
      title,
      description,
      dueDate,
      priorityLevel,
      user: userId,
    });

    const savedTask = await task.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { createTask };
