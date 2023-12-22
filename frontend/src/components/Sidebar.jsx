import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FaCamera } from "react-icons/fa6";
import { IoLogoBuffer } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const Menus = [
    {
      path: "/create-task",
      icon: <AiFillHome />,
    },
    { path: "/tasks", icon: <BiTask /> },
    { path: "/profile", icon: <FaCamera /> },
  ];

  const location = useLocation();

  return (
    <div className="w-16 h-screen bg-slate-900 text-white pt-8 flex flex-col items-center gap-y-3">
      <IoLogoBuffer size={52} />
      <div className="flex flex-col gap-y-3 w-full pt-5">
        <span></span>
        {Menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <li
                className={`${
                  location.pathname === menu.path && "bg-slate-800"
                } list-none `}
              >
                <span
                  className={`text-2xl flex items-center justify-center p-2 ${
                    location.pathname === menu.path
                      ? "text-blue-600"
                      : "text-zinc-600"
                  }`}
                >
                  {menu.icon}
                </span>
              </li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
