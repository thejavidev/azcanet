"use client";
import { motion as m } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";
import React, { useEffect } from "react";
import FetchData from "@/helpers/FetchData";

const CommunitySingle = ({params}:any) => {
  
 
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const { cachedData } = FetchData(["comunity", "navbar_colors"]);

      const currentPost = cachedData?.comunity?.find(
        (post: any) => post?.slug_en === params?.slug
      );

      const pageNames = [
        {
          name: "Home page",
          link: "/",
        },
        {
          name: "comunity",
          link: "/community-updates",
        },
        {
          name: `${currentPost?.title_en}`,
          link: `#`,
        },
      ];
    
  return (
    <>
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
          <div className=" w-full mt-3 px-[100px] 2xl:px-[50px] lg:px-[20px] min-h-[100px] contentstatments">
            <p
              dangerouslySetInnerHTML={{
                __html: currentPost?.text_en && currentPost?.text_en,
              }}
            ></p>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default CommunitySingle;
