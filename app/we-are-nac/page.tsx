"use client";
import NOA from "@/components/WeAreNac/NOA";
import SomeMoments from "@/components/WeAreNac/SomeMoments";
import WhatCanYou from "@/components/WeAreNac/WhatCanYou";
import About from "@/components/shared/About";
import FetchData from "@/helpers/FetchData";

const page = () => {
  const { cachedData } = FetchData(["who"]);
  const section_2 = cachedData?.who?.section_2;
  const section_3_4 = cachedData?.who?.section_3_4;
  return (
    <>
      <NOA />
      <About
        title={section_2?.section_two_title_1_en}
        text={section_2?.section_two_text_en}
        url={section_2?.section_two_src}
        bg={section_2?.section_two_bg}
      />
      <SomeMoments />
      <WhatCanYou />
    </>
  );
};

export default page;
