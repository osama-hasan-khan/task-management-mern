import React from "react";
import myImage from "../assets/images/isometric-view-san-francisco-s-bridge.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-row h-screen gap-20">
      <img
        src={myImage}
        alt="image"
        className="w-[50%] h-[100%] object-cover"
      />
      <div className="flex flex-col justify-center">
        <h1 className="font-extrabold text-5xl">Create an account</h1>
        <h2 className="font-bold text-xl">Task Management Application</h2>
        <form className="flex flex-col mt-8 gap-2">
          <label htmlFor="" className="font-bold">
            Username
          </label>
          <input
            type="text"
            className="outline-none border border-slate-300 px-3 py-1 rounded-md"
          />
          <label htmlFor="" className="font-bold">
            Email
          </label>
          <input
            type="email"
            className="outline-none border border-slate-300 px-3 py-1 rounded-md"
          />
          <label htmlFor="" className="font-bold">
            Password
          </label>
          <input
            type="password"
            className="outline-none border border-slate-300 px-3 py-1 rounded-md"
          />
        </form>

        <Link
          to="/dashboard"
          className="mt-3 px-3 py-1.5 bg-black text-white font-bold text-center rounded-md"
        >
          Sign up
        </Link>

        <Link to="/login" className="mt-4">
          Already have an account
          <button className="underline ml-2">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
