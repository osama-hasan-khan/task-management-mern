import React, { useState } from "react";
import myImage from "../assets/images/isometric-view-san-francisco-s-bridge.jpg";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { toast } from "react-toastify";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/createUser", {
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

      console.log("Sign-up successful:", data);
      navigate("/login");
    } catch (error) {
      toast.error("Error during sign-up:", error.message);
    }
  };

  return (
    <div className="flex flex-row h-screen justify-between items-center mr-24">
      <img
        src={myImage}
        alt="image"
        className="w-[50%] h-[100%] object-cover rounded-tr-[100px] rounded-bl-[100px]"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-myFont">Create an account</h1>
        <h2 className="text-2xl font-myFont tracking-widest">
          Task Management Application
        </h2>

        <form className="flex flex-col mt-8 gap-2" onSubmit={handleSignUp}>
          <label className="font-myFont tracking-widest">Username</label>
          <div className="relative">
            <CiUser className="absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="John Doe"
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              value={inputs.username}
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-extrabold w-full"
            />
          </div>

          <label className="font-myFont tracking-widest">Email</label>
          <div className="relative">
            <MdEmail className="absolute left-3 top-2.5" />
            <input
              type="email"
              placeholder="Johndoe123@gmail.com"
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              value={inputs.email}
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
              placeholder="********"
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-bold w-full placeholder:font-myFont"
            />
          </div>

          <button
            type="submit"
            className="mt-3 px-3 py-1.5 bg-black text-white font-bold font-myFont tracking-widest text-center rounded-lg flex justify-center gap-2 items-center"
          >
            Signup
            <MdArrowOutward size={22} />
          </button>
        </form>

        <Link to="/login" className="mt-4 font-myFont tracking-widest">
          Already have an account
          <button className="underline ml-2 tracking-wider text-green-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
