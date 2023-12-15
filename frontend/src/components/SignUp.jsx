import React from "react";
import myImage from "../assets/images/isometric-view-san-francisco-s-bridge.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-row h-screen gap-x-20">
      <img
        src={myImage}
        alt="image"
        className="w-[50%] h-[100%] object-cover"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-myFont">Create an account</h1>
        <h2 className="text-2xl font-myFont tracking-widest">
          Task Management Application
        </h2>
        <form className="flex flex-col mt-8 gap-2">
          <label htmlFor="" className="font-myFont tracking-widest">
            Username
          </label>
          <input
            type="text"
            className="outline-none border border-slate-300 px-3 py-1 rounded-lg w-[80%]"
          />
          <label htmlFor="" className="font-myFont tracking-widest">
            Email
          </label>
          <input
            type="email"
            className="outline-none border border-slate-300 px-3 py-1 rounded-lg w-[80%]"
          />
          <label htmlFor="" className="font-myFont tracking-widest">
            Password
          </label>
          <input
            type="password"
            className="outline-none border border-slate-300 px-3 py-1 rounded-lg w-[80%]"
          />
        </form>

        <Link
          to="/dashboard"
          className="mt-3 px-3 py-1.5 bg-black text-white font-bold font-myFont tracking-widest text-center rounded-lg w-[80%]"
        >
          Sign up
        </Link>

        <Link to="/login" className="mt-4 font-myFont tracking-widest">
          Already have an account
          <button className="underline ml-2 tracking-wider">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
