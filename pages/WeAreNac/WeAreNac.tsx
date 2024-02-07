"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import NOA from "@/components/WeAreNac/NOA";
import SomeMoments from "@/components/WeAreNac/SomeMoments";
import WhatCanYou from "@/components/WeAreNac/WhatCanYou";
import About from "@/components/shared/About";
import FetchData from "@/helpers/FetchData";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

const WeAreNac = ({ pageNames }: any) => {
  const { cachedData } = FetchData(["who"]);
  const section_2 = cachedData?.who?.section_2;
  const section_3_4 = cachedData?.who?.section_3_4;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <NOA />
        <About
          title={section_2?.section_two_title_1_en}
          text={section_2?.section_two_text_en}
          url={section_2?.section_two_src}
          bg={section_2?.section_two_bg}
        />

        <About
          title={section_3_4?.section_three_title_1_en}
          title2={section_3_4?.section_four_title_1_en}
          text={section_3_4?.section_three_text_en}
          text2={section_3_4?.section_four_text_en}
          url={section_3_4?.section_three_src}
          bg={section_3_4?.section_three_bg}
        />
        <SomeMoments />
        <WhatCanYou />
      </m.div>
    </>
  );
};

export default WeAreNac;
