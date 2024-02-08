import React, { useState } from "react";
import workspace_1 from "../assets/images/workspace_1.png";
import workspace_2 from "../assets/images/workspace_2.png";
import useLogout from "../hooks/useLogout";
import useGetProfile from "../hooks/useGetProfile";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const WorkSpace = () => {
  const [workspace, setWorkspace] = useState("");

  const { logout } = useLogout();
  const { profile } = useGetProfile();

  const navigate = useNavigate();

  const CreateWorkspace = async () => {
    try {
      const response = await fetch("api/workspace/createWorkspace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: workspace }),
      });

      navigate("/tasks");

      if (response.ok) {
        return toast.success("workspace craeted succesfully");
      }
    } catch (error) {
      toast.error("Error during logout:", error.message);
    }
  };

  return (
    <div className="overflow-y-hidden">
      <div className="bg-[#f9f9f9] shadow h-16 px-7 py-3 border-b border-b-[#eee] text-end">
        <button
          onClick={logout}
          className="bg-[#1d1e22] text-white px-3 py-2 rounded-lg font-myFourteenthFont text-[14px]"
        >
          Logout
        </button>
      </div>

      <div className="flex flex-row items-center overflow-hidden">
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
          <div className="max-w-[500px]">
            <h1 className="font-myTwelthFont text-slate-700 text-2xl">
              Create a new workspace
            </h1>

            <h1 className="font-myTwelthFont text-zinc-500 mt-2 text-[13px]">
              Workspaces are shared environments where teams can collaborate on
              tasks, cycles and projects
            </h1>

            <h1 className="font-myTwelthFont text-zinc-500 text-[14px]">
              Workspace Name
            </h1>

            <input
              type="text"
              value={workspace}
              onChange={(e) => setWorkspace(e.target.value)}
              placeholder={`${profile.email}`}
              className="outline-none border border-slate-200 px-3 py-2.5 rounded-lg font-myTwelthFont
               placeholder:font-myTwelthFont placeholder:text-[12px] w-[90%] text-black mt-2 hover:border hover:border-slate-300"
            />

            <button
              onClick={CreateWorkspace}
              disabled={workspace.trim().length === 0}
              className="mt-4 px-3 py-2.5 bg-black text-white font-myTwelthFont text-center rounded-xl w-[90%] disabled:bg-[#eaebee] disabled:text-[#959aa8]"
            >
              Continue
            </button>
          </div>
        </div>

        <div className="w-[100%] relative">
          <img src={workspace_2} alt="logo" className="w-[100%] h-[100vh]" />

          <img
            src={workspace_1}
            alt="logo"
            className="w-[100%] h-[100vh] absolute top-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
