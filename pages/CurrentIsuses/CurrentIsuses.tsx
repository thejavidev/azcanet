"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Tabs from "@/components/Tab/Tabs";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { CopyNotification } from "@/components/CopyNotification/CopyNotification";
import Share from "@/components/Share/Share";
import React, { useEffect, useState } from "react";
import FetchData from "@/helpers/FetchData";

const CurrentIsuses = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");
  const { cachedData } = FetchData(["currentIsusesCtg", "currentIsuses"]);
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "current Isuses",
      link: "#",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CopyLinkTitle = () => {
    const link = window?.location?.href;
    setCopiedLink(link);
    setShowNotification(true);
    navigator?.clipboard?.writeText(link);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <Image
          src={cachedData?.currentIsuses}
          width={1000}
          height={300}
          alt=""
          className="w-full h-[350px] lg:h-[250px] object-cover"
        />

        <div className="px-[150px] 2xl:px-[50px] lg:px-[20px]">
          <div className="mt-[20px]">
            <Tabs>
              {cachedData?.currentIsusesCtg?.map((data: any) => (
                <Tabs.Panel key={data?.id} title={data?.name_en}>
                  <div className="pt-[50px]">
                    <p
                      className="font-[700] text-[35px] lg:text-[20px] md:text-[16px] tracking-[0.7px] text-[#212529]"
                      dangerouslySetInnerHTML={{
                        __html: data && data?.title_en,
                      }}
                    ></p>
                    <div
                      className="tab-content lg:text-[13px] "
                      dangerouslySetInnerHTML={{
                        __html: data && data?.text_en,
                      }}
                    ></div>
                  </div>
                </Tabs.Panel>
              ))}
            </Tabs>
          </div>
          <Share copyLink={CopyLinkTitle} />
          {showNotification && <CopyNotification link={copiedLink} />}
        </div>
      </m.div>
    </>
  );
};

export default CurrentIsuses;
