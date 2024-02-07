"use client";
import AccordionItem from "@/components/AccordionItem/AccordionItem";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";
import FetchData from "@/helpers/FetchData";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

const BecomeAMember = ({ pageNames }: any) => {
  const { cachedData } = FetchData(["options", "faq"]);
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
        <div className="mb-4 ">
          <GlobalBanner
            longtext={
              cachedData?.options?.become?.become_a_member_banner_title_en
            }
            bgColor={cachedData?.options?.navbar_colors?.section_bg}
            images={cachedData?.options?.become?.become_a_member_banner_src}
          />
        </div>
        <div
          className="py-[30px] px-[100px] 2xl:px-[50px] lg:px-[20px] tab-content media lg:text-sm"
          dangerouslySetInnerHTML={{
            __html:
              cachedData?.options?.become &&
              cachedData?.options?.become?.become_member_text_en,
          }}
        ></div>
        <div className="py-[30px] px-[100px] 2xl:px-[50px] lg:px-[20px] md:px-[10px]">
          <AccordionItem accordionItems={cachedData?.faq} />
        </div>
      </m.div>
    </>
  );
};

export default BecomeAMember;
