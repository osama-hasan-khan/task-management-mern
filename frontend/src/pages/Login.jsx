import React, { useState } from "react";
import { IoLogoBuffer } from "react-icons/io";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactTyped from "react-typed";
import myImage from "../assets/images/isometric-view-san-francisco-s-ferry-building.jpg";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

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

      dispatch(setUser(data));

      if (!response.ok) {
        return toast.error(data.error);
      }

      console.log("Login successful:", data);

      navigate("/create-task");

      if (response.ok) {
        return toast.success(data.success);
      }
    } catch (error) {
      toast.error("Error during login:", error.message);
    }
  };

  return (
    <div className="flex flex-row h-screen items-center justify-between pr-20 bg-[#0e0d1d] text-white">
      <img
        src={myImage}
        alt="image"
        className="w-[50%] h-[100%] object-cover"
      />
      <div className="flex flex-col justify-center">
        <div className="flex flex-row items-center gap-4">
          <IoLogoBuffer size={52} />
          <h1 className="font-extrabold font-myFont text-xl tracking-widest text-blue-600">
            <ReactTyped strings={["LeafBoard"]} typeSpeed={350} loop />
          </h1>
        </div>
        <h1 className="text-7xl font-myFont">Welcome Back</h1>
        <h2 className="text-2xl font-myFont tracking-widest">
          Task Management Application
        </h2>
        <form className="flex flex-col mt-8 gap-2" onSubmit={handleLogin}>
          <label className="font-myFont tracking-widest">Email</label>
          <div className="relative">
            <MdEmail className="absolute left-3 top-2.5 text-black" />
            <input
              type="email"
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              value={inputs.email}
              placeholder="Johndoe123@gmail.com"
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-extrabold w-full text-black"
            />
          </div>
          <label className="font-myFont tracking-widest">Password</label>
          <div className="relative">
            <RiLockPasswordFill className="absolute left-3 top-2.5 text-black" />
            <input
              type="password"
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              value={inputs.password}
              placeholder="**************"
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-extrabold w-full text-black"
            />
          </div>
          <button
            type="submit"
            className="mt-3 px-3 py-1.5 bg-blue-700 text-white font-bold font-myFont tracking-widest text-center rounded-lg flex justify-center gap-2 items-center"
          >
            Login
            <MdArrowOutward size={22} />
          </button>
        </form>

        <Link to="/signup" className="mt-4 font-myFont tracking-widest">
          Don't have an account
          <button className="underline ml-2 tracking-wider text-blue-600">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
