import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateUserTask = () => {
  const [userProfile, setUserProfile] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;

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
    dueDate: new Date(),
    priorityLevel: "medium",
    status: "todo",
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
      <h1 className="font-mySixthFont text-xl font-bold">Create Your Task</h1>
      <Link to="/profile" className="flex items-center justify-between">
        <h1 className="font-myFifthFont tracking-widest text-4xl">
          Welcome, {userProfile.username}!
        </h1>
        <p className="font-myFont tracking-widest text-xl">
          {userProfile.email}
        </p>
      </Link>

      <form
        className="flex flex-col gap-3 w-[80%]"
        onSubmit={handleTaskCreationSubmit}
      >
        <label className="font-mySixthFont">Title of task</label>
        <input
          type="text"
          placeholder="Design ui/ux for web"
          className="border border-black outline-none px-2 py-1 rounded placeholder:font-mySixthFont w-[50%]"
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          value={inputs.title}
        />

        <label className="font-mySixthFont">Description of task</label>

        <textarea
          type="text"
          rows="5"
          placeholder="A description of task"
          className="border border-black outline-none px-2 py-1 rounded placeholder:font-mySixthFont w-[60%]"
          onChange={(e) =>
            setInputs({ ...inputs, description: e.target.value })
          }
          value={inputs.description}
        />

        <label className="font-mySixthFont">Due Date of task</label>

        {/* <input
          type="date"
          className="border-slate-400 border outline-none px-2 py-1 rounded-lg placeholder:font-mySecondFont font-bold focus:border-green-600"
          onChange={(e) => setInputs({ ...inputs, dueDate: e.target.value })}
          value={inputs.dueDate}
        /> */}

        <DatePicker
          selected={inputs.dueDate}
          onChange={(date) => setInputs({ ...inputs, dueDate: date })}
          className="border border-black outline-none px-2 py-1 rounded placeholder:font-mySeventhFont w-[12%]"
          type="date"
        />

        <label className="relative w-[10%] font-mySixthFont">
          Priority:
          <select
            name="priorityLevel"
            value={inputs.priorityLevel}
            onChange={(e) =>
              setInputs({ ...inputs, priorityLevel: e.target.value })
            }
            className="w-full p-2 bg-white border border-black rounded outline-none appearance-none"
          >
            <option value="low" className="font-mySeventhFont">
              Low
            </option>
            <option value="medium" className="font-mySeventhFont">
              Medium
            </option>
            <option value="high" className="font-mySeventhFont">
              High
            </option>
          </select>
        </label>

        <label className="relative w-[10%] font-mySixthFont">
          Status
          <select
            name="status"
            value={inputs.status}
            onChange={(e) => setInputs({ ...inputs, status: e.target.value })}
            className="w-full p-2 bg-white border border-black rounded outline-none appearance-none"
          >
            <option value="backlog" className="font-mySeventhFont">
              Backlog
            </option>
            <option value="todo" className="font-mySeventhFont">
              Todo
            </option>
            <option value="inprogress" className="font-mySeventhFont">
              In Progress
            </option>
            <option value="notstarted" className="font-mySeventhFont">
              Not Started
            </option>
            <option value="completed" className="font-mySeventhFont">
              Completed
            </option>
          </select>
        </label>

        <button
          type="submit"
          className="mt-2 py-1.5 w-[12%] bg-cyan-700 text-white font-mySixthFont text-center rounded flex justify-center gap-1 items-center"
        >
          Create Task
          <MdArrowOutward size={20} />
        </button>
      </form>
    </div>
  );
};

export default CreateUserTask;
