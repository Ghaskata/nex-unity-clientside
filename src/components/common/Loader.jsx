import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen fixed top-0 start-0 bg-white dark:bg-black/25 flex items-center justify-center z-50">
      <span className="block w-[48px] h-[48px] animate-spin rounded-full border-4 border-black/90 border-l-0 border-b-0">

      </span>
    </div>
  );
};

export default Loader;
