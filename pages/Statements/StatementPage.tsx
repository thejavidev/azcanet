"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CommonData from "@/components/CommonData/CommonData";
import CommonDataNextBtn from "@/components/CommonData/CommonDataNextBtn";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";
import FetchData from "@/helpers/FetchData";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

const StatementPage = ({  hrefLink }: any) => {
  const { cachedData } = FetchData(["options", "statements"]);
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "statements",
      link: "#",
    },
  ];
  const imagePerRow = 3;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(imagePerRow + next);
  };
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
        <div className="mb-4">
          <GlobalBanner
            longtext={
              cachedData?.options?.statments?.statements_banner_title_en
            }
            bgColor={cachedData?.options?.navbar_colors?.section_bg}
            images={cachedData?.options?.statments?.statements_banner_src}
          />
        </div>
        <CommonData
          cachedData={cachedData?.statements}
          next={next}
          href={hrefLink}
        />
        <CommonDataNextBtn
          next={next}
          cachedData={cachedData?.statements}
          handleMoreImage={handleMoreImage}
        />
      </m.div>
    </>
  );
};

export default StatementPage;
