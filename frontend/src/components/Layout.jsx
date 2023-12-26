import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = ({}) => {
  return (
    <>
      <div className="flex flex-1 h-screen">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="m-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
