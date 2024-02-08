import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import myImage from "../assets/images/sign-up.png";
import { setUser } from "../redux/userSlice";
import Logo from "../assets/images/logo.png";
import AuthLoading from "../components/AuthLoading";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/users/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      dispatch(setUser(data));

      if (!response.ok) {
        return toast.error(data.error);
      }

      navigate("/workspace-creation");

      if (response.ok) {
        return toast.success("login successfully");
      }
    } catch (error) {
      toast.error("Error during login:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Link to="/" className="flex items-center gap-2 p-5">
        <img src={Logo} alt="logo" className="w-6 h-6" />
        <h1 className="font-myTwelthFont text-2xl">SaaSForge</h1>
      </Link>
      <div className="flex flex-row h-screen items-center justify-around">
        {loading ? (
          <>
            <AuthLoading />
          </>
        ) : (
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-myTwelthFont text-black text-[29px]">
              Login
            </h1>
            <h1 className="text-4xl font-myTwelthFont text-zinc-500 text-[15px]">
              Welcome back! Please enter your details.
            </h1>

            <form className="flex flex-col mt-3 gap-2" onSubmit={handleLogin}>
              <label className="font-myTwelthFont text-zinc-500 mt-3 text-[13px]">
                Email
              </label>

              <input
                type="email"
                placeholder="Johndoe@gmail.com"
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                value={inputs.email}
                className="outline-none border border-slate-200 px-3 py-2.5 rounded-lg font-myTwelthFont placeholder:font-myTwelthFont placeholder:text-[12px] w-[100%] text-black"
              />

              <label className="font-myTwelthFont text-zinc-500 mt-2 text-[13px]">
                Password
              </label>

              <input
                type="password"
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                value={inputs.password}
                placeholder="your password"
                className="outline-none border border-slate-200 px-3 py-2.5 rounded-lg font-myTwelthFont placeholder:font-myTwelthFont placeholder:text-[12px] w-[100%] text-black"
              />

              <button
                type="submit"
                className="mt-4 px-3 py-2.5 bg-[#343434] text-white font-myTwelthFont text-center rounded-lg w-[100%] font-extralight"
              >
                Continue with Email
              </button>
            </form>
            <Link
              to="/signup"
              className="mt-4 font-myTwelthFont text-slate-600 text-[14px]"
            >
              Don't have an account?
              <button className="underline ml-2 text-[#48abd6]">Signup</button>
            </Link>
          </div>
        )}

        <img
          src={myImage}
          alt="image"
          className="w-[40%] h-[100%%] object-contain"
        />
      </div>
    </>
  );
};

export default Login;
