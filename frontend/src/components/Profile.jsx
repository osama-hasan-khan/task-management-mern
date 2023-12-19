import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { userId } = useParams();

  const handleUpdateUserProfile = async (e) => {
    e.preventDefault();

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

    try {
    } catch (error) {
      toast.error("Error during updating profile:", error.message);
    }
  };

  return (
    <div className="p-5">
      <div className="flex flex-col gap-10">
        <h1 className="font-myFourthFont text-2xl">My Profile</h1>
        <div className="flex flex-row items-center gap-2">
          <CgProfile size={34} />
          <div className="flex flex-col">
            <p className="font-myFont tracking-widest text-xs">John</p>
            <p className="text-xs font-myFont tracking-widest">
              john@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
