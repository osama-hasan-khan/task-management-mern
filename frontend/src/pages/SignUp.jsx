import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import myImage from "../assets/images/sign-up.png";
import { setUser } from "../redux/userSlice";
import AuthLoading from "../components/AuthLoading";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/users/createUser", {
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

      navigate("/tasks");

      if (response.ok) {
        toast.success("Signup Successfully");
      }
    } catch (error) {
      toast.error("Error during sign-up:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-row h-screen justify-around items-center">
        {loading ? (
          <>
            <AuthLoading />
          </>
        ) : (
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-myTwelthFont text-black">
              Create Account
            </h1>
            <h1 className="font-myTwelthFont text-slate-500 mt-1.5">
              Get started on the journey of tasks management
            </h1>

            <>
              <form className="flex flex-col mt-8" onSubmit={handleSignUp}>
                <label className="font-myTwelthFont text-zinc-500 text-[13px]">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                  value={inputs.username}
                  className="outline-none border border-slate-200 px-3 py-2.5 rounded-lg font-myTwelthFont placeholder:font-myTwelthFont placeholder:text-[12px] w-[90%] text-black"
                />

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
                  className="outline-none border border-slate-200 px-3 py-2.5 rounded-lg font-myTwelthFont placeholder:font-myTwelthFont placeholder:text-[12px] w-[90%] text-black"
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
                  className="outline-none border border-slate-200 px-3 py-2.5 rounded-lg font-myTwelthFont placeholder:font-myTwelthFont placeholder:text-[12px] w-[90%] text-black"
                />

                <button
                  type="submit"
                  className="mt-4 px-3 py-2.5 bg-[#343434] text-white font-myTwelthFont text-center rounded-lg w-[90%] font-extralight"
                >
                  Continue
                </button>
              </form>
            </>

            <Link
              to="/login"
              className="mt-4 font-myTwelthFont text-slate-600 text-[14px]"
            >
              Already have an account?
              <button className="underline ml-2 text-[#48abd6]">Login</button>
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

export default SignUp;
