import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Circles
        visible={true}
        height="200"
        width="200"
        radius="48"
        color="#000"
        ariaLabel="circls-loading"
      />
    </div>
  );
};

export default Loading;
