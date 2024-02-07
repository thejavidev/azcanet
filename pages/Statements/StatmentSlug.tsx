"use client";
import CommonDataInenr from "@/components/CommonData/CommonDataInenr";
import React, { useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import FetchData from "@/helpers/FetchData";

const StatmentSlug = ({ params }: any) => {
  const { cachedData } = FetchData(["statements"]);
  const currentPost = cachedData?.statements?.find(
    (post: any) => post?.slug_en === params?.slug
  );
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "statements",
      link: "/statements",
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
      <Breadcrumb pageNames={pageNames} />
      <CommonDataInenr
        images={currentPost?.src}
        title1={currentPost?.title_en}
        title2={currentPost?.text_en}
      />
    </>
  );
};

export default StatmentSlug;
