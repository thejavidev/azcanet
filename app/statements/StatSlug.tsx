"use client"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CommonDataInenr from "@/components/CommonData/CommonDataInenr";
import FetchData from "@/helpers/FetchData";
import React, { useEffect } from "react";

const StatSlug = ({ id }: any) => {
  const { cachedData } = FetchData(["statements"]);

  const currentPost = cachedData?.statements?.find(
    (post: any) => post?.id === id
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

export default StatSlug;
