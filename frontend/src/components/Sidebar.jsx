import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FaCamera } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const Menus = [
    {
      title: "Dashboard",
      path: "/create-task",
      icon: <AiFillHome />,
    },
    { title: "Profile", path: "/tasks", icon: <BiTask /> },
    { title: "Course", path: "/profile", icon: <FaCamera /> },
  ];

  const location = useLocation();

  return (
    <ul className="w-16 h-screen bg-slate-900 text-white pt-36 flex flex-col items-center gap-y-3">
      {Menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index} className={`w-full`}>
            <li
              className={`${
                location.pathname === menu.path && "bg-slate-800"
              } `}
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
    </ul>
  );
};

export default Sidebar;
