"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CommonDataInenr from "@/components/CommonData/CommonDataInenr";
import FetchData from "@/helpers/FetchData";
import { motion as m } from "framer-motion";

import { useParams } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const { slug } = useParams<any>();

  const { cachedData } = FetchData(["statements"]);

  const currentPost = cachedData?.statements?.find(
    (post: any) => post?.slug_en === slug?.[0]
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
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <title>Azcanet.ca - Statements</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <CommonDataInenr
          images={currentPost?.src}
          title1={currentPost?.title_en}
          title2={currentPost?.text_en}
        />
      </m.div>
    </>
  );
};

export default page;
