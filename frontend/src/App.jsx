import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={SignUp} />
        <Route path="/login" Component={Login} />
      </Routes>
    </>
  );
}

export default App;
