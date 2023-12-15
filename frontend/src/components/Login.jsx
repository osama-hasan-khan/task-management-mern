import React from "react";
import myImage from "../assets/images/isometric-view-san-francisco-s-ferry-building.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-row h-screen gap-20">
      <img
        src={myImage}
        alt="image"
        className="w-[50%] h-[100%] object-cover"
      />
      <div className="flex flex-col justify-center">
        <h1 className="font-extrabold text-5xl">Welcome Back</h1>
        <h2 className="font-bold text-xl">Task Management Application</h2>
        <form className="flex flex-col mt-8 gap-2">
          <label htmlFor="" className="font-bold">
            Email
          </label>
          <input
            type="email"
            className="outline-none border border-slate-300 px-3 py-1 rounded-lg"
          />
          <label htmlFor="" className="font-bold">
            Password
          </label>
          <input
            type="password"
            className="outline-none border border-slate-300 px-3 py-1 rounded-lg"
          />
        </form>

        <Link to="/signup" className="mt-4">
          Don't have an account
          <button className="underline ml-2">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
