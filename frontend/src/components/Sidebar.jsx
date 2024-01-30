import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FaCamera } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../redux/userSlice";

const Sidebar = () => {
  const [userProfile, setUserProfile] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const Menus = [
    {
      path: "/create-task",
      icon: <AiFillHome />,
      name: "Task Creation",
    },
    { path: "/tasks", icon: <BiTask />, name: "Task Overview" },
    { path: "/profile", icon: <FaCamera />, name: "Profile" },
  ];

  const location = useLocation();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/users/getProfile");

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();

        setUserProfile(data);
      } catch (error) {
        toast.error("Error during logout:", error.message);
      }
    };

    fetchProfile();
  }, []);

  const handleLogoutUser = async () => {
    try {
      const response = await fetch("/api/users/logoutUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      dispatch(logoutUser());

      if (!response.ok) {
        return toast.error(data.error);
      }

      if (response.ok) {
        toast.success(data.message);
      }

      navigate("/login");
    } catch (error) {
      toast.error("Error during logout:", error.message);
    }
  };

  return (
    <>
      <div className="w-44 h-screen text-black pt-8 flex flex-col items-center gap-y-3 border-r border-black">
        <div className="flex flex-col gap-y-3 w-full pt-5 h-full">
          {Menus.map((menu, index) => {
            return (
              <Link to={menu.path} key={index}>
                <li
                  className={`${
                    location.pathname === menu.path && "bg-zinc-200"
                  } list-none `}
                >
                  <span
                    className={`flex items-center gap-2 p-2 ${
                      location.pathname === menu.path
                        ? "text-black"
                        : "text-black"
                    }`}
                  >
                    <span className="text-xl text-black">{menu.icon}</span>
                    <span className="font-myEighthFont">{menu.name}</span>
                  </span>
                </li>
              </Link>
            );
          })}
        </div>

        <Link
          to="/profile"
          className="flex items-center gap-2 px-1.5 py-0.5 border-t w-full"
        >
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-8 h-8 rounded"
          />
          <div className="flex flex-col">
            <p className="font-myFifthFont">{userProfile.email}</p>
            <p className="font-myFifthFont">{userProfile.username}</p>
          </div>
        </Link>

        <button
          type="submit"
          className="px-3 py-1.5 w-[100%] bg-zinc-50 flex items-center justify-center gap-1 font-myEighthFont text-xl"
          onClick={handleLogoutUser}
        >
          <LuLogOut />
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
