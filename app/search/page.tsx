"use client";
import FetchData from "@/helpers/FetchData";
import { Get } from "@/services/fetchServices";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";
import SearchComponent from "@/components/Searching/SearchComponent";

const page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "Searching",
      link: "#",
    },
  ];
  const { cachedData } = FetchData(["options"]);


  return (
    <>
      <title>Azcanet.ca - Searching</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <div className="mb-4">
          <GlobalBanner
            longtext={cachedData?.options?.search?.search_banner_title_en}
            bgColor={cachedData?.options?.navbar_colors?.section_bg}
            images={cachedData?.options?.search?.search_banner_src}
          />
        </div>
        <SearchComponent />
      </m.div>
    </>
  );
};

export default page;
