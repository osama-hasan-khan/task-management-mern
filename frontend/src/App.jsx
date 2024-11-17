import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import WorkSpace from "./pages/WorkSpace";
// import Tasks from "./components/Tasks";
// import CreateUserTask from "./pages/CreateUserTask";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/create-task" element={<CreateUserTask />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/workspace-creation" element={<WorkSpace />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
