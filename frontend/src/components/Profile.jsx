import React from "react";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-10">
        <h1 className="font-myFourthFont text-2xl">My Profile</h1>
        <div className="flex flex-row">
          <CgProfile size={26} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
