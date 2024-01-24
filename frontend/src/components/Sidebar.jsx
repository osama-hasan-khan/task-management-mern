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
      name: "Task Creation",
    },
    { path: "/tasks", icon: <BiTask />, name: "Task Overview" },
    { path: "/profile", icon: <FaCamera />, name: "Profile" },
  ];

  const location = useLocation();

  return (
    <div className="w-32 h-screen bg-black text-white pt-8 flex flex-col items-center gap-y-3">
      <IoLogoBuffer size={52} />
      <div className="flex flex-col gap-y-3 w-full pt-5">
        {Menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <li
                className={`${
                  location.pathname === menu.path && "bg-slate-800"
                } list-none `}
              >
                <span
                  className={`flex items-center gap-1 p-2 ${
                    location.pathname === menu.path
                      ? "text-green-300"
                      : "text-zinc-400"
                  }`}
                >
                  <span className="text-xl">{menu.icon}</span>
                  <span className="text-[13px] font-myFifthFont">
                    {" "}
                    {menu.name}{" "}
                  </span>
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
