import React from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/images/home.jpg";
import { IoMdArrowForward } from "react-icons/io";

const HomePage = () => {
  return (
    <div className="flex flex-row justify-between h-screen">
      <div className="flex flex-col gap-3 items-center justify-center pl-24">
        <h1 className="font-myFifteenthFont text-4xl text-center">
          The future of work is focused.
        </h1>
        <h5 className="font-myFifteenthFont">
          A platform built for a new way of working
        </h5>
        <h6 className="font-myFifteenthFont">
          Convenient and productive task manager for all your tasks
        </h6>
        <Link
          to="/signup"
          className="mt-3 px-[12px] py-[14px] bg-[#bcf870] text-black text-center rounded-lg font-myEleventhFont font-bold flex items-center gap-3"
        >
          Get Started For Free
          <IoMdArrowForward size={22} />
        </Link>
        <p className="font-myFourteenthFont">(No Credit Card Required)</p>
      </div>
      <img
        src={myImage}
        alt="image"
        className="w-[70%] h-[100%] object-cover"
      />
    </div>
  );
};

export default HomePage;
