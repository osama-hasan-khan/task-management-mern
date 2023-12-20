import UserTaskModel from "../models/userTaskModel.js";

const createTask = async (req, res) => {
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
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const getAlltasks = async (req, res) => {
  try {
    const tasks = await UserTaskModel.find().sort({ priority: -1, dueDate: 1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const getTask = async (req, res) => {
  try {
    const task = await UserTaskModel.findOne({ user: req.user._id });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const userId = req.user._id;
    const updateData = req.body;

    let task = await UserTaskModel.findById(taskId);

    // const task = await UserTaskModel.findOne({ _id: taskId, user: userId });

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    if (task.user.toString() != userId) {
      return res
        .status(403)
        .json({ status: false, msg: "You can't update task of another user" });
    }

    task = await UserTaskModel.findByIdAndUpdate(taskId, updateData, {
      new: true,
    });
    res
      .status(200)
      .json({ task, status: true, msg: "Task updated successfully.." });

    res.json({ msg: "Task updated successfully", task });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const userId = req.user._id;

    let task = await UserTaskModel.findById(taskId);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    if (task.user.toString() != userId) {
      return res
        .status(403)
        .json({ status: false, msg: "You can't update task of another user" });
    }

    await UserTaskModel.findByIdAndDelete(taskId);
    res.status(200).json({ status: true, msg: "Task deleted successfully.." });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const searchUserTask = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm || "";

    const result = await UserTaskModel.find({
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

export {
  createTask,
  getAlltasks,
  updateTask,
  getTask,
  deleteTask,
  searchUserTask,
};
