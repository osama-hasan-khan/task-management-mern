import React, { useState } from "react";
import myImage from "../assets/images/isometric-view-san-francisco-s-bridge.jpg";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await fetch("/api/users/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (data.error) {
        toast.error(data.error);
        return;
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex flex-row h-screen justify-between items-center mr-24">
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
        <form className="flex flex-col mt-8 gap-2" onSubmit={handleSignUp}>
          <label htmlFor="" className="font-myFont tracking-widest">
            Username
          </label>
          <div className="relative">
            <CiUser className="absolute left-3 top-2" />
            <input
              type="text"
              name="userName"
              required
              placeholder="John Doe"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-myFont tracking-widest w-full"
            />
          </div>

          <label htmlFor="" className="font-myFont tracking-widest">
            Email
          </label>
          <div className="relative">
            <MdEmail className="absolute left-3 top-2" />
            <input
              type="text"
              name="email"
              required
              placeholder="Johndoe123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-myFont tracking-widest w-full"
            />
          </div>
        </form>

        <Link
          onClick={handleSignUp}
          className="mt-3 px-3 py-1.5 bg-black text-white font-bold font-myFont tracking-widest text-center rounded-lg"
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
