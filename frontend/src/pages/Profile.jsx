import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, selectUser } from "../redux/userSlice";

const Profile = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleUpdateUserProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/users/updateProfile/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (!response.ok) {
        return toast.error(data.error);
      }

      navigate("/dashboard");

      if (response.ok) {
        return toast.success("profile updated successfully");
      }
    } catch (error) {
      toast.error("Error during updating profile:", error.message);
    }
  };

  const handleLogoutUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/logoutUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      dispatch(clearUser);

      if (!response.ok) {
        return toast.error(data.error);
      }
      navigate("/");

      if (response.ok) {
        toast.success(data.message);
      }
    } catch (error) {
      toast.error("Error during logout:", error.message);
    }
  };

  return (
    <div className="flex flex-row p-10 gap-28">
      <div className="flex flex-col">
        <h1 className="font-myFourthFont tracking-wider text-2xl">
          Personal Information
        </h1>
        <p className="font-myThirdFont tracking-wide">Change your profile</p>
        <form
          className="flex flex-col mt-8 gap-2"
          onSubmit={handleUpdateUserProfile}
        >
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
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-extrabold"
            />
          </div>
          <label className="font-myFont tracking-widest">Email Address</label>
          <div className="relative">
            <MdEmail className="absolute left-3 top-2.5" />
            <input
              type="email"
              placeholder="Johndoe123@gmail.com"
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              value={inputs.email}
              className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-extrabold"
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
            Update Profile
            <MdArrowOutward size={22} />
          </button>
        </form>
        <button
          type="submit"
          className="mt-3 px-3 py-1.5 bg-black text-white font-bold font-myFont tracking-widest text-center rounded-lg flex justify-center gap-2 items-center"
          onClick={handleLogoutUser}
        >
          Logout
          <AiOutlineLogout size={22} />
        </button>
      </div>
    </div>
  );
};

export default Profile;
