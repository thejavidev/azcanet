"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";
import FetchData from "@/helpers/FetchData";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { motion as m } from "framer-motion";

const page = () => {
  const { take } = useParams<any>();
  const { cachedData } = FetchData(["take", "navbar_colors"]);

  const currentPost = cachedData?.take?.find(
    (post: any) => post?.slug_en === take?.[0]
  );

  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "take action",
      link: "/take-action",
    },
    {
      name: `${currentPost?.title_en}`,
      link: `#`,
    },
  ];
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
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
            bgColor={cachedData?.navbar_colors?.section_bg}
            images={currentPost?.src}
            longtext={currentPost?.title_en}
            intro={currentPost?.intro_text_en}
          />
          <div className=" w-full mt-3 px-[100px] min-h-[100px]">
            <p className="contentstatments">{currentPost?.intro_text_en}</p>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default page;
