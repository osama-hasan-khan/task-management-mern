import { Link, useLocation } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";

const Sidebar = () => {
  const Menus = [
    {
      path: "/create-task",
      icon: <MdOutlineDashboard />,
      name: "Task Creation",
    },
    { path: "/tasks", icon: <CiHome />, name: "Home" },
    { path: "/profile", icon: <CiImageOn />, name: "Profile" },
  ];

  // const Menu2 = [
  //   {
  //     name: "Menu",
  //     menuBar: [
  //       {
  //         path: "/create-task",
  //         icon: <CiHome />,
  //         name: "Task Creation",
  //       },
  //       { path: "/tasks", icon: <MdOutlineDashboard />, name: "Dashboard" },
  //     ],
  //   },
  // ];
  const location = useLocation();

  return (
    <>
      <div className="w-60 h-screen pt-8 flex flex-col items-center gap-y-3">
        <div className="">
          <h1 className="text-2xl">Welcome to TASKER!</h1>
        </div>
        <div className="flex flex-col gap-y-3 w-full pt-5 h-full">
          <span className="px-2">Menu</span>
          {Menus.map((menu, index) => {
            return (
              <Link to={menu.path} key={index}>
                <li
                  className={`${
                    location.pathname === menu.path && "bg-slate-200 rounded-xl"
                  } list-none`}
                >
                  <span
                    className={`flex items-center gap-2 p-2 ${
                      location.pathname === menu.path
                        ? "text-blue-600"
                        : "text-black"
                    }`}
                  >
                    <span className="text-xl">{menu.icon}</span>
                    <span className="font-sans">{menu.name}</span>
                  </span>
                </li>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
