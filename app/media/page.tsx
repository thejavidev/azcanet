"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";

import MediaComponnet from "@/components/MediaComponnet/MediaComponnet";
import FetchData from "@/helpers/FetchData";
import { motion as m } from "framer-motion";

import { useEffect, useState } from "react";

const page = () => {
  const { cachedData } = FetchData(["options", "media"]);
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "media",
      link: "#",
    },
  ];
  const imagePerRow = 4;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(imagePerRow + next);
  };
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  const grid = "col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12";
  return (
    <>
      <title>Azcanet.ca - Media</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <div className="mb-4">
          <GlobalBanner
            longtext={cachedData?.options?.media?.media_title_en}
            bgColor={cachedData?.options?.navbar_colors?.section_bg}
            images={cachedData?.options?.media?.media_src}
          />
        </div>
        <div className="mt-6 grid grid-cols-12 gap-6 px-[100px]">
          {cachedData?.media &&
            cachedData?.media?.slice?.(0, next)?.map((item: any, i: number) => {
              return (
                <MediaComponnet
                  key={i}
                  item={item}
                  href={item?.slug_en}
                  classes={grid}
                />
              );
            })}
        </div>
        <div className="flex items-center justify-center mt-4">
          {next < cachedData?.media?.length && (
            <button
              onClick={handleMoreImage}
              className="border-[1px] border-solid border-[#ec5a44] text-[#ec5a44] p-[10px] font-semibold text-lg uppercase rounded-md tl hover:bg-[#ec5a44] hover:text-white"
            >
              See more
            </button>
          )}
        </div>
      </m.div>
    </>
  );
};

export default page;
