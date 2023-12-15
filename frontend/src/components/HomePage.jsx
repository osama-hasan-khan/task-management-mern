import React from "react";
import myImage from "../assets/images/home.jpg";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";

const HomePage = () => {
  return (
    <div className="flex flex-row justify-between p-6 h-screen">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="font-extrabold text-6xl">
          <ReactTyped strings={["LeafBoard"]} typeSpeed={300} loop />
        </h1>
        <h5 className="text-xl font-bold">
          A platform built for a new of working
        </h5>
        <h6 className="font-bold">Convenient and productive task manager</h6>
        <Link
          to="/signup"
          className="bg-green-400 px-3 py-1.5 rounded-full font-bold"
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
