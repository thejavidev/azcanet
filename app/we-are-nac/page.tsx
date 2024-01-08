"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import NOA from "@/components/WeAreNac/NOA";
import SomeMoments from "@/components/WeAreNac/SomeMoments";
import WhatCanYou from "@/components/WeAreNac/WhatCanYou";
import About from "@/components/shared/About";
import FetchData from "@/helpers/FetchData";

const page = () => {
  const { cachedData } = FetchData(["who"]);
  const section_2 = cachedData?.who?.section_2;
  const section_3_4 = cachedData?.who?.section_3_4;
  
  const pageNames =[
    {
      name:"Home page",
      link:"/"
    },
    {
      name:'We are nac',
      link:"#"
    }
  ]

  return (
    <>
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
    </>
  );
};

export default page;
