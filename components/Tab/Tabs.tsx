"use client";
import React, { useState } from "react";

const Tabs = ({ children }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (i: any) => {
    setActiveTab(i);
  };

  return (
    <>
      <div className="flex justify-between items-center gap-[15px]">
        {children?.map((child: any, i: number) => (
          <button
            type="button"
            key={i}
            onClick={() => handleChangeTab(i)}
            className={`p-[10px] rounded-[5px] uppercase text-[16px] font-[600] min-w-[22%] ${
              activeTab === i
                ? "font-[700] bg-[#ec5a44] text-white shadow-[0_4px_13px_rgba(236,90,68,.6),0_2px_3px_rgba(236,90,68,.41)]"
                : "border bg-[#759acd] border-[#759acd] text-white  "
            }`}
          >
            {child?.props?.title}
          </button>
        ))}
      </div>
      <>{children?.[activeTab]}</>
    </>
  );
};

export default Tabs;

Tabs.Panel = function ({ children }: any) {
  return <>{children}</>;
};
