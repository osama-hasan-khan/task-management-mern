import UserTaskModel from "../models/User.js";

const createTask = async (req, res) => {
  const { title, description, dueDate, priorityLevel, status } = req.body;

  try {
    const task = await UserTaskModel.create({
      title,
      description,
      dueDate,
      priorityLevel,
      status,
      user: req.user._id,
    });

    const savedTask = await task.save();

    if (savedTask) {
      return res.status(201).json({ success: "successfull task created " });
    }

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

const markAsACompleted = async (req, res) => {
  const { taskId } = req.params;
  try {
    const updatedTask = await UserTaskModel.updateOne(
      { _id: taskId },
      { $set: { status: "completed" } }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (updatedTask) {
      return res
        .status(200)
        .json({ message: "Task added to completed status" });
    }

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ err: err.message });
    console.log(err);
  }
};

const countEachTasks = async (req, res) => {
  const backLogCount = await UserTaskModel.countDocuments({
    status: "backlog",
  });
  const toDoCount = await UserTaskModel.countDocuments({ status: "todo" });
  const inProgressCount = await UserTaskModel.countDocuments({
    status: "inprogress",
  });
  const notStartedCount = await UserTaskModel.countDocuments({
    status: "not started",
  });
  const completedCount = await UserTaskModel.countDocuments({
    status: "completed",
  });

  res.json({
    backlog: backLogCount,
    todo: toDoCount,
    inprogress: inProgressCount,
    notstarted: notStartedCount,
    completed: completedCount,
  });

  try {
  } catch (err) {
    res.status(500).json({ err: err.message });
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
  markAsACompleted,
  countEachTasks,
};
