import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { userId } = useParams();

  const handleUpdateUserProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/users/updateProfile/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (!response.ok) {
        return toast.error(data.error);
      }

      console.log("Sign-up successful:", data);

      if (response.ok) {
        return toast.success("profile updated successfully");
      }

      navigate("/dashboard");
    } catch (error) {
      toast.error("Error during updating profile:", error.message);
    }
  };

  return (
    <div className="p-5 flex flex-col">
      <h1 className="font-myThirdFont">Personal Information</h1>

      <form
        className="flex flex-col mt-8 gap-2"
        onSubmit={handleUpdateUserProfile}
      >
        <label className="font-myFont">Username</label>
        <div className="relative">
          <CiUser className="absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="John Doe"
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            value={inputs.username}
            className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-extrabold w-full"
          />
        </div>
        <label className="font-myFont">Email Address</label>
        <div className="relative">
          <MdEmail className="absolute left-3 top-2.5" />
          <input
            type="email"
            placeholder="Johndoe123@gmail.com"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            value={inputs.email}
            className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-extrabold w-full"
          />
        </div>
        <label className="font-myFont">Password</label>
        <div className="relative">
          <RiLockPasswordFill className="absolute left-3 top-2.5" />
          <input
            type="password"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            value={inputs.password}
            placeholder="********"
            className="outline-none border pl-8 border-slate-300 px-3 py-1 rounded-lg font-bold w-full placeholder:font-myFont"
          />
        </div>
        <button
          type="submit"
          className="mt-3 px-3 py-1.5 bg-black text-white font-bold font-myFont tracking-widest text-center rounded-lg flex justify-center gap-2 items-center"
        >
          Update Profile
          <MdArrowOutward size={22} />
        </button>
      </form>
    </div>
  );
};

export default Profile;
