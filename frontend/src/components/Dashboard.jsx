import React, { useState } from "react";
import { IoLogoBuffer } from "react-icons/io";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState("");

  useState(() => {
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
  return (
    <div className="p-5 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-1">
        <IoLogoBuffer size={28} />
        <h1 className="font-mySecondFont font-extralight text-xl tracking-wider">
          LeafBoard
        </h1>
      </Link>

      <div className="flex items-center justify-evenly gap-4">
        <Link className="font-myFont tracking-widest">Dashboard</Link>
        <Link
          to={`/profile/${userProfile._id}`}
          className="font-myFont tracking-widest"
        >
          MyProfile
        </Link>

        <div className="flex gap-x-2">
          <div className="border-l-2 border-black" />
          <CgProfile size={26} />
          <h1 className="font-mySecondFont">{userProfile.username}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
