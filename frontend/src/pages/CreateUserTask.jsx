import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateUserTask = () => {
  const [userProfile, setUserProfile] = useState("");

  const [today, setToday] = useState("");

  useEffect(() => {
    // Create a new Date object
    const currentDate = new Date();

    // Get individual components of the date (year, month, day)
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const day = currentDate.getDate();

    // Format the date as a string (in this example, YYYY-MM-DD)
    const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;

    // Update the state with the formatted date
    setToday(formattedDate);
  }, []);

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
        console.log(error.message);
      }
    };

    fetchProfile();
  }, []);

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
  });

  const navigate = useNavigate();

  const handleTaskCreationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/tasks/createTasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (!response.ok) {
        return toast.error(data.error);
      }

      navigate("/tasks");

      if (response.ok) {
        return toast.success(data.success);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col">
      <Link to="/profile">
        <h1 className="font-myFourthFont font-extrabold tracking-widest text-4xl">
          Welcome, {userProfile.username}!
        </h1>
        <p className="font-myFont tracking-widest text-xl">
          {userProfile.email}
        </p>
      </Link>
      <p className="font-myFont tracking-widest text-3xl">
        Create your task here!
      </p>
      <p className="font-myThirdFont">Today is {today}</p>

      <h1 className="font-myFifthFont mt-12 text-xl">Fill Your Task Fields</h1>

      <form
        className="flex flex-col gap-3 w-[80%]"
        onSubmit={handleTaskCreationSubmit}
      >
        <label className="font-myThirdFont">Title of task</label>
        <input
          type="text"
          placeholder="Design ui/ux for web"
          className="border-slate-400 border outline-none px-2 py-1 rounded-xl placeholder:font-mySecondFont font-bold focus:border-green-600"
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          value={inputs.title}
        />

        <label className="font-myThirdFont">Description of task</label>
        <input
          type="text"
          placeholder="A task title is a concise and descriptive label assigned to a specific task within a project"
          className="border-slate-400 border outline-none px-2 py-1 rounded-lg placeholder:font-mySecondFont font-bold focus:border-green-600"
          onChange={(e) =>
            setInputs({ ...inputs, description: e.target.value })
          }
          value={inputs.description}
        />

        <label className="font-myThirdFont">Due Date of task</label>
        <input
          type="date"
          className="border-slate-400 border outline-none px-2 py-1 rounded-lg placeholder:font-mySecondFont font-bold focus:border-green-600"
          onChange={(e) => setInputs({ ...inputs, dueDate: e.target.value })}
          value={inputs.dueDate}
        />

        <label className="relative w-[30%] font-myThirdFont">
          Priority:
          <select
            name="priority"
            value={inputs.priority}
            onChange={(e) => setInputs({ ...inputs, priority: e.target.value })}
            className="w-full p-2.5 bg-white border border-slate-400 rounded-lg  outline-none appearance-none focus:border-green-600"
          >
            <option value="low" className="font-extrabold">
              Low
            </option>
            <option value="medium" className="font-extrabold">
              Medium
            </option>
            <option value="high" className="font-extrabold">
              High
            </option>
          </select>
        </label>

        <button
          type="submit"
          className="mt-3 px-3 py-1.5 w-[30%] bg-green-600 text-white font-bold font-myFont tracking-widest text-center rounded-lg flex justify-center gap-2 items-center"
        >
          Create Task
          <MdArrowOutward size={22} />
        </button>
      </form>
    </div>
  );
};

export default CreateUserTask;
