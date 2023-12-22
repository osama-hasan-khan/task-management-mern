import React from "react";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";
import myImage from "../assets/images/home.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-row justify-between h-screen bg-slate-900 text-white">
      <div className="flex flex-col gap-3 items-center justify-center pl-24">
        <h1 className="font-extrabold font-myFont text-6xl">
          <ReactTyped strings={["LeafBoard"]} typeSpeed={350} loop />
        </h1>
        <h5 className="text-xl font-myFont tracking-widest">
          A platform built for a new way of working
        </h5>
        <h6 className="font-myFont text-3xl">
          Convenient and productive task manager
        </h6>
        <Link
          to="/signup"
          className="mt-3 px-3 py-1.5 bg-blue-700 text-white text-center rounded-lg font-myFont tracking-widest"
        >
          Get Started For Free
        </Link>
      </div>
      <img
        src={myImage}
        alt="image"
        className="w-[50%] h-[100%] object-cover"
      />
    </div>
  );
};

export default HomePage;
