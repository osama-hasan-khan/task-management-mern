import {
  Calendar,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  Clock,
  Folder,
  Layout,
  LayoutDashboard,
  Menu,
  PlusSquare,
  Search,
  Settings,
  X,
} from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateUserTask from "../pages/CreateUserTask";
import WorkSpace from "../pages/WorkSpace";
import { openModal } from "../redux/modelSlice";
import { openWorkspaceModal } from "../redux/workspaceSlice";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [expandedWorkspaces, setExpandedWorkspaces] = useState(["workspace1"]);

  const dispatch = useDispatch();

  const workspaces = [
    {
      id: "workspace1",
      name: "Marketing Team",
      projects: [
        { id: "proj1", name: "Q4 Campaign" },
        { id: "proj2", name: "Social Media" },
        { id: "proj3", name: "Content Calendar" },
      ],
    },
    {
      id: "workspace2",
      name: "Development",
      projects: [
        { id: "proj4", name: "Website Redesign" },
        { id: "proj5", name: "Mobile App" },
      ],
    },
    {
      id: "workspace3",
      name: "Personal",
      projects: [
        { id: "proj6", name: "Goals 2024" },
        { id: "proj7", name: "Side Projects" },
      ],
    },
  ];

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "tasks", icon: CheckSquare, label: "Tasks" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  const toggleWorkspace = (workspaceId) => {
    setExpandedWorkspaces((prev) => (prev === workspaceId ? "" : workspaceId));
  };
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white transition-all duration-300 relative flex flex-col`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute right-0 top-4 transform translate-x-1/2 bg-white rounded-full p-1 border"
        >
          {isSidebarOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

        <div className="p-4 flex-shrink-0">
          <div className="flex items-center space-x-3 pb-3">
            <div className="bg-indigo-50 p-2 rounded-xl">
              <Layout className="h-6 w-6 text-indigo-600" />
            </div>

            <h1
              className={`text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text ${
                !isSidebarOpen && "hidden"
              }`}
            >
              TaskFlow
            </h1>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedTab(item.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors
                  ${
                    selectedTab === item.id
                      ? "bg-gray-100 text-[#000000]"
                      : "hover:bg-gray-100"
                  }`}
              >
                <item.icon size={20} />
                <span className={`ml-3 ${!isSidebarOpen && "hidden"}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Workspace Section */}
        <WorkSpace />
        <div
          className={`p-4 flex-1 overflow-y-auto ${!isSidebarOpen && "hidden"}`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase">
              Workspaces
            </h2>
            <button
              className="text-blue-600 hover:bg-blue-50 p-1 rounded"
              onClick={() => dispatch(openWorkspaceModal())}
            >
              <PlusSquare size={16} />
            </button>
          </div>
          <CreateUserTask />

          <div className="space-y-2">
            {workspaces.map((workspace) => (
              <div key={workspace.id} className="space-y-1">
                <button
                  onClick={() => toggleWorkspace(workspace.id)}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Folder size={16} className="text-gray-400" />
                    <span className="text-sm font-medium">
                      {workspace.name}
                    </span>
                  </div>
                  {expandedWorkspaces.includes(workspace.id) ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </button>

                {expandedWorkspaces.includes(workspace.id) && (
                  <div className="ml-4 pl-4 border-l border-gray-200 space-y-1">
                    {workspace.projects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => setSelectedTab(project.id)}
                        className={`w-full flex items-center p-2 rounded-lg text-sm transition-colors
                          ${
                            selectedTab === project.id
                              ? "bg-blue-100 text-blue-600"
                              : "hover:bg-gray-100 text-gray-600"
                          }`}
                      >
                        {project.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}

        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {selectedTab === "dashboard" && "Dashboard"}
              {selectedTab === "tasks" && "Tasks"}
              {selectedTab === "calendar" && "Calendar"}
              {selectedTab === "settings" && "Settings"}
              {workspaces.map(
                (w) =>
                  w.projects.find((p) => p.id === selectedTab) &&
                  `${w.name} / ${
                    w.projects.find((p) => p.id === selectedTab).name
                  }`
              )}
            </h2>
            <div className="flex gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-80 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex gap-4">
                <button
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => dispatch(openModal())}
                >
                  <PlusSquare size={20} />
                  <span>New Task</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Task Summary Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Task Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Tasks</span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Completed</span>
                  <span className="text-green-600 font-semibold">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">In Progress</span>
                  <span className="text-blue-600 font-semibold">6</span>
                </div>
              </div>
            </div>

            {/* Recent Tasks Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recent Tasks</h3>
              <div className="space-y-4">
                {[
                  { title: "Update dashboard design", time: "2 hours ago" },
                  { title: "Review project proposal", time: "4 hours ago" },
                  { title: "Team meeting prep", time: "6 hours ago" },
                ].map((task, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Clock size={16} className="text-gray-400" />
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-gray-500">{task.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Weekly Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Project Alpha</span>
                    <span className="font-semibold">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Project Beta</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
