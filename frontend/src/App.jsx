import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import CreateUserTask from "./pages/CreateUserTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="" element={<Dashboard />}>
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
