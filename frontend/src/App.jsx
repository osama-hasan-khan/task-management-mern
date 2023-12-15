import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={Login} />
      </Routes>
    </>
  );
}

export default App;
