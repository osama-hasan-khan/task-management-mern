import React from "react";
import myImage from "../assets/images/isometric-view-san-francisco-s-ferry-building.jpg";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="flex flex-row h-screen items-center justify-between mr-36">
      <img
        src={myImage}
        alt="image"
        className="w-[50%] h-[100%] object-cover"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-myFont">Welcome Back</h1>
        <h2 className="text-2xl font-myFont tracking-widest">
          Task Management Application
        </h2>
        <form className="flex flex-col mt-8 gap-2">
          <label htmlFor="" className="font-myFont tracking-widest">
            Email
          </label>
          <div className="relative">
            <MdEmail className="absolute left-3 top-2" />
            <input
              type="text"
              placeholder="Johndoe123@gmail.com"
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-myFont tracking-widest w-full"
            />
          </div>
          <label htmlFor="" className="font-myFont tracking-widest">
            Password
          </label>
          <div className="relative">
            <RiLockPasswordFill className="absolute left-3 top-2" />
            <input
              type="password"
              placeholder="**************"
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-myFont tracking-widest w-full"
            />
          </div>
        </form>

        <Link
          to="/dashboard"
          className="mt-3 px-3 py-1.5 bg-black text-white font-bold text-center rounded-lg font-myFont tracking-widest"
        >
          Login
        </Link>

        <Link to="/signup" className="mt-4 font-myFont tracking-widest">
          Don't have an account
          <button className="underline ml-2 tracking-wider">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
