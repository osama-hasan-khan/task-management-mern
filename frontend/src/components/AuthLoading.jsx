import React from "react";
import { ColorRing } from "react-loader-spinner";

const AuthLoading = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="font-myTwelthFont text-xl text-zinc-800">
        Authorizing........
      </h1>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#000"]}
      />
    </div>
  );
};

export default AuthLoading;
