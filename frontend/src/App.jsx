import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
