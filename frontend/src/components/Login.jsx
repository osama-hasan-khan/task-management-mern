import React, { useState } from "react";
import myImage from "../assets/images/isometric-view-san-francisco-s-ferry-building.jpg";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (!response.ok) {
        return toast.error(data.error);
      }

      console.log("Login successful:", data);

      navigate("/dashboard");
    } catch (error) {
      toast.error("Error during login:", error.message);
    }
  };

  return (
    <div className="flex flex-row h-screen items-center justify-between mr-36">
      <img
        src={myImage}
        alt="image"
        className="w-[50%] h-[100%] object-cover rounded-tr-[100px] rounded-bl-[100px]"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-myFont">Welcome Back</h1>
        <h2 className="text-2xl font-myFont tracking-widest">
          Task Management Application
        </h2>
        <form className="flex flex-col mt-8 gap-2" onSubmit={handleLogin}>
          <label className="font-myFont tracking-widest">Email</label>
          <div className="relative">
            <MdEmail className="absolute left-3 top-2.5" />
            <input
              type="email"
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              value={inputs.email}
              placeholder="Johndoe123@gmail.com"
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-extrabold w-full"
            />
          </div>
          <label className="font-myFont tracking-widest">Password</label>
          <div className="relative">
            <RiLockPasswordFill className="absolute left-3 top-2.5" />
            <input
              type="password"
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              value={inputs.password}
              placeholder="**************"
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-extrabold w-full"
            />
          </div>
          <button
            type="submit"
            className="mt-3 px-3 py-1.5 bg-black text-white font-bold font-myFont tracking-widest text-center rounded-lg flex justify-center gap-2 items-center"
          >
            Login
            <MdArrowOutward size={22} />
          </button>
        </form>

        <Link to="/signup" className="mt-4 font-myFont tracking-widest">
          Don't have an account
          <button className="underline ml-2 tracking-wider text-green-600">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
