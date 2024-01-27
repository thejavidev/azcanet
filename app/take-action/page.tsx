"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";
import TakeComponnet from "@/components/TakeComponnet/TakeComponnet";
import FetchData from "@/helpers/FetchData";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
const Page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "take action",
      link: "#",
    },
  ];

  const { cachedData } = FetchData(["options", "take"]);
  const [activeDraft, setActiveDraft] = useState(0);
  const [fadeOutClass, setFadeOutClass] = useState("");

  const filteredData = cachedData?.take?.filter(
    (item: any) => item?.draft === activeDraft
  );

  const handleButtonClick = (draft: any) => {
    setActiveDraft(draft);
    setFadeOutClass("fadeOutNoa");
    setTimeout(() => {
      setFadeOutClass("");
    }, 200);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeOutClass("");
      window.scrollTo(0, 0);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [fadeOutClass]);

  return (
    <>
      <title>Azcanet.ca - Take action</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <div className="mb-4">
          <GlobalBanner
            longtext={
              cachedData?.options?.take_action?.take_action_banner_title_en
            }
            bgColor={cachedData?.options?.navbar_colors?.section_bg}
            images={cachedData?.options?.take_action?.take_action_banner_src}
          />
        </div>
        <div className="px-[100px] py-[20px]">
          <div className="flex items-center justify-center gap-4">
            <button
              className={`text-white font-semibold rounded-md uppercase p-3 ${
                activeDraft === 0 ? "bg-[#adc4e6]" : "bg-[#759acd]"
              }`}
              type="button"
              onClick={() => handleButtonClick(0)}
            >
              past
            </button>
            <button
              className={`text-white font-semibold rounded-md uppercase p-3 ${
                activeDraft === 1 ? "bg-[#adc4e6]" : "bg-[#759acd]"
              }`}
              type="button"
              onClick={() => handleButtonClick(1)}
            >
              current
            </button>
          </div>
          {filteredData?.map((item: any) => (
            <TakeComponnet key={item?.id} data={item} fade={fadeOutClass} />
          ))}
        </div>
      </m.div>
    </>
  );
};

export default Page;
