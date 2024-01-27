import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser, setUser } from "../redux/userSlice";

const Profile = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const { userInfo } = useSelector((state) => state.user);
  const user = useSelector(selectUser);

  console.log(user);

  const handleUpdateUserProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/users/updateProfile/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data));

      dispatch(setUser(data));

      if (!response.ok) {
        return toast.error(data.error);
      }

      navigate("/tasks");

      if (response.ok) {
        return toast.success("profile updated successfully");
      }
    } catch (error) {
      toast.error("Error during updating profile:", error.message);
    }
  };

  const handleLogoutUser = async () => {
    try {
      const response = await fetch("/api/users/logoutUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      localStorage.removeItem("user");

      dispatch(logoutUser());

      if (!response.ok) {
        return toast.error(data.error);
      }

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
        <h1 className="font-myFifthFont tracking-wider text-2xl">
          Edit Profile
        </h1>
        <p className="font-mySixthFont font-extralight">
          Make changes to your profile here. Click save when you're done
        </p>
        <form
          className="flex flex-col mt-8 gap-2"
          onSubmit={handleUpdateUserProfile}
        >
          <div className="flex flex-row items-center gap-3">
            <label className="font-myFifthFont">Username</label>
            <div className="relative">
              <CiUser className="absolute left-3 top-2" />
              <input
                type="text"
                placeholder="John Doe"
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
                value={inputs.username}
                className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-md font-mySeventhFont"
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <label className="font-myFifthFont">Email Address</label>
            <div className="relative">
              <MdEmail className="absolute left-3 top-2" />
              <input
                type="email"
                placeholder="Johndoe123@gmail.com"
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                value={inputs.email}
                className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-md font-mySeventhFont"
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <label className="font-myFifthFont">Password</label>
            <div className="relative">
              <RiLockPasswordFill className="absolute left-3 top-2" />
              <input
                type="password"
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                value={inputs.password}
                placeholder="********"
                className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-bold w-full font-mySeventhFont"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-3 px-3 py-1.5 bg-black text-white font-myFifthFont rounded-md w-[40%]"
          >
            Save Changes
          </button>
        </form>

        <button
          type="submit"
          className="mt-3 px-3 py-1.5 bg-black text-white font-myFifthFont rounded-md w-[40%]"
          onClick={handleLogoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
