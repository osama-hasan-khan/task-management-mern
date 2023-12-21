import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoLogoBuffer } from "react-icons/io";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import Profile from "../pages/Profile";

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
    // <div className="p-5 flex items-center justify-between">
    //   <Link to="/" className="flex items-center gap-1">
    //     <IoLogoBuffer size={28} />
    //     <h1 className="font-mySecondFont font-extralight text-xl tracking-wider">
    //       LeafBoard
    //     </h1>
    //   </Link>

    //   <div className="flex items-center justify-evenly gap-4">
    //     <Link className="font-myFont tracking-widest">Dashboard</Link>
    //     <Link to={`/profile`} className="font-myFont tracking-widest">
    //       MyProfile
    //     </Link>

    //     <div className="flex gap-x-2">
    //       <div className="border-l-2 border-black" />
    //       <CgProfile size={26} />
    //       <h1 className="font-mySecondFont">{userProfile.username}</h1>
    //     </div>
    //   </div>
    // </div>
    <Layout></Layout>
  );
};

export default Dashboard;
