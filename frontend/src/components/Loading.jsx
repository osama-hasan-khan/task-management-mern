import React from "react";
import { Watch } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Watch
        visible={true}
        height="200"
        width="200"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
      />
    </div>
  );
};

export default Loading;
