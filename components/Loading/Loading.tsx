import React from "react";

const SiteLoading = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-[#eee] h-screen fixed top-0 right-0 left-0 z-[800] transition-all">
        <div className="w-[64px] h-[64px] relative bg-[#fff] rounded-sm overflow-hidden loader"></div>
      </div>
    </>
  );
};

export default SiteLoading;
