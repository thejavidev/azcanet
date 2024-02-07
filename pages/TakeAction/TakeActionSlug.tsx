"use client";
import React from "react";
import FetchData from "@/helpers/FetchData";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";
import { useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const TakeActionSlug = ({ params }: any) => {
  const { cachedData } = FetchData(["take", "navbar_colors"]);

  const currentPost = cachedData?.take?.find(
    (post: any) => post?.slug_en === params?.slug
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mb-4">
        <Breadcrumb pageNames={pageNames} />
        <GlobalBanner
          bgColor={cachedData?.navbar_colors?.section_bg}
          images={currentPost?.src}
          longtext={currentPost?.title_en}
          intro={currentPost?.intro_text_en}
        />
        <div className=" w-full mt-3 px-[100px] 2xl:px-[50px] lg:px-[20px] min-h-[100px]">
          <p className="contentstatments">{currentPost?.intro_text_en}</p>
        </div>
      </div>
    </>
  );
};

export default TakeActionSlug;
