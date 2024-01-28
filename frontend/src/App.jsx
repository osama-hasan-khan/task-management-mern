import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Tasks from "./components/Tasks";
import CreateUserTask from "./pages/CreateUserTask";
import WorkSpace from "./pages/WorkSpace";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workspace" element={<WorkSpace />} />
        <Route element={<Dashboard />}>
          <Route path="/create-task" element={<CreateUserTask />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
