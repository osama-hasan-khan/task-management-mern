import React from "react";
import myImage from "../assets/images/home.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-row justify-between p-6">
      <div className="flex flex-col gap-3 items-center justify-center h-screen">
        <h1 className="text-8xl font-sans">LeafBoard</h1>
        <h5 className="text-xl">A platform built for a new of working</h5>
        <h6 className="font-bold">Convenient and productive task manager</h6>
        <Link to="/signup" className="bg-green-400 px-3 py-1.5 rounded-full font-medium">
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
