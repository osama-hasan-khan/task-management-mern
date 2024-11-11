import Project from "../models/Project.js";

const createProject = async (req, res) => {
  const { workspaceId } = req.params;
  const { name, description, members } = req.body;

  try {
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) {
      return res.status(404).json({ error: "Workspace not found" });
    }

    const project = new Project({
      name,
      description,
      workspace: workspaceId,
      members,
    });

    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};
const getProjectsByWorkspace = async (req, res) => {
  try {
  } catch (err) {
    const { workspaceId } = req.params;

    const projects = await Project.find({ workspace: workspaceId }).populate(
      "members",
      "name email"
    );
    res.status(200).json(projects);

    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const getProjectById = async (req, res) => {
  try {
    const { projectId } = req.params;

    const project = await Project.findById(projectId)
      .populate("members", "name email")
      .populate("tasks");

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { name, description, members } = req.body;

    const project = await Project.findByIdAndUpdate(
      projectId,
      { name, description, members, updatedAt: Date.now() },
      { new: true } // Return the updated project
    );

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const deleteProject = async (req, res) => {
  try {
  } catch (err) {
    const { projectId } = req.params;

    const project = await Project.findByIdAndDelete(projectId);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully" });
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

export {
  createProject,
  deleteProject,
  getProjectsByWorkspace,
  getProjectById,
  updateProject,
};
