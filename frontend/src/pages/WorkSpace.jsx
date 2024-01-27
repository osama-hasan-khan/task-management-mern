import React from "react";

const WorkSpace = () => {
  return (
    <div className="">
      <form className="flex flex-col items-start justify-center gap-2 bg-[#F6F1F4] h-screen">
        <label className="font-mySixthFont font-extrabold mt-6">
          Add a Title for Workspace
        </label>
        <input
          type="text"
          className="focus:outline-none border border-blue-700 rounded px-5 py-8 w-[60%]"
        />
      </form>
    </div>
  );
};

export default WorkSpace;
