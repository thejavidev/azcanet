"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";
import FetchData from "@/helpers/FetchData";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

const page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "Volunteer At Nac",
      link: "#",
    },
  ];
  const { cachedData } = FetchData(["options"]);
  const volunter = "Volunteer at NAC";
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <title>Azcanet.ca - Volunteer at NAC</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <div className="mb-4">
          <GlobalBanner
            longtext={volunter}
            bgColor={cachedData?.options?.navbar_colors?.section_bg}
            images={cachedData?.options?.volunteer?.volunteer_banner_src}
          />
        </div>
        <div
          className="py-[30px] px-[100px] tab-content media"
          dangerouslySetInnerHTML={{
            __html:
              cachedData?.options?.volunteer &&
              cachedData?.options?.volunteer?.volunteer_banner_title_en,
          }}
        ></div>
      </m.div>
    </>
  );
};

export default page;
