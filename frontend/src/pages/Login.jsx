import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import myImage from "../assets/images/sign-up.png";
import { setUser } from "../redux/userSlice";
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

      navigate("/dashboard");

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
      <div className="flex flex-row h-screen items-center justify-around">
        {loading ? (
          <>
            <AuthLoading />
          </>
        ) : (
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl text-black text-[29px]">Login</h1>
            <h1 className="text-4xl text-zinc-500 text-[15px]">
              Welcome back! Please enter your details.
            </h1>

            <form className="flex flex-col mt-3 gap-2" onSubmit={handleLogin}>
              <label className="text-zinc-500 mt-3">Email</label>

              <input
                type="email"
                placeholder="Johndoe@gmail.com"
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                value={inputs.email}
                className="outline-none border border-slate-400 px-3 py-2.5 rounded-lg text-black"
              />

              <label className="text-zinc-500 mt-2 text-[13px]">Password</label>

              <input
                type="password"
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                value={inputs.password}
                placeholder="your password"
                className="outline-none border border-slate-400 px-3 py-2.5 rounded-lg text-black"
              />

              <button
                type="submit"
                className="mt-4 px-3 py-2.5 bg-[#343434] text-white text-center rounded-lg w-[50%]"
              >
                Login
              </button>
            </form>
            <Link to="/signup" className="mt-4 text-slate-600">
              Don&apos;t have an account?
              <button className="underline ml-2 text-[#48abd6]">Signup</button>
            </Link>
          </div>
        )}

        <img src={myImage} alt="image" className="w-[40%] object-contain" />
      </div>
    </>
  );
};

export default Login;
