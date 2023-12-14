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

const getAlltasks = asyncHandler(async (req, res) => {
  try {
    const tasks = await UserTaskModel.find();
    res.json(tasks);
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getTask = asyncHandler(async (req, res) => {
  try {
    const task = await UserTaskModel.findOne({ user: req.user._id });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const updateTask = asyncHandler(async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const userId = req.user._id;
    const updateData = req.body;

    const task = await UserTaskModel.findOne({ user: userId });

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    task.title = updateData.title;
    task.description = updateData.description;
    task.dueDate = updateData.dueDate;
    task.priorityLevel = updateData.priorityLevel;

    await task.save();

    res.json({ msg: "Task updated successfully", task });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { createTask, getAlltasks, updateTask, getTask };
