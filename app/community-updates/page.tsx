"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CommonData from "@/components/CommonData/CommonData";
import CommonDataNextBtn from "@/components/CommonData/CommonDataNextBtn";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";

import FetchData from "@/helpers/FetchData";
import { motion as m } from "framer-motion";

import { useEffect, useState } from "react";

const page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "community updates",
      link: "#",
    },
  ];
  const { cachedData } = FetchData(["options", "comunity"]);
  const imagePerRow = 3;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(imagePerRow + next);
  };
  const hrefLink = "community-updates";
  const notfoundImg = "/notfound.webp";
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <title>Azcanet.ca - Community update</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <div className="mb-4">
          <GlobalBanner
            longtext={cachedData?.options?.community?.community_banner_title_en}
            bgColor={cachedData?.options?.navbar_colors?.section_bg}
            images={cachedData?.options?.community?.community_banner_src}
          />
        </div>
        <CommonData
          cachedData={cachedData?.comunity}
          next={next}
          href={hrefLink}
          notfoundImg={notfoundImg}
        />
        <CommonDataNextBtn
          next={next}
          handleMoreImage={handleMoreImage}
          cachedData={cachedData?.statements}
        />
      </m.div>
    </>
  );
};

export default page;
