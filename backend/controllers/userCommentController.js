import UserCommentModel from "../models/Comment.js";

const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { taskId } = req.params;
    const authorId = req.user._id;

    const task = await UserTaskModel.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const comment = new UserCommentModel({
      text,
      task: taskId,
      author: authorId,
    });

    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const getCommentsByTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const comments = await UserCommentModel.find({ task: taskId })
      .populate("author", "name email")
      .sort({ createdAt: 1 });

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { text } = req.body;

    const comment = await UserCommentModel.findByIdAndUpdate(
      commentId,
      { text },
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await UserCommentModel.findByIdAndDelete(commentId);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};
export { addComment, getCommentsByTask, updateComment, deleteComment };
