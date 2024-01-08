"use client";
import Tabs from "@/components/Tab/Tabs";
import FetchData from "@/helpers/FetchData";
import Link from "next/link";
import React from "react";

const page = () => {
  const { cachedData } = FetchData(["currentIsusesCtg"]);

  return (
    <div className="wrapper">
      <div className="mt-[20px]">
        <Tabs>
          {cachedData?.currentIsusesCtg?.map((data: any) => (
            <Tabs.Panel key={data?.id} title={data?.name_en}>
              <div className="pt-[50px]">
                <p
                  className="font-[700] text-[35px] tracking-[0.7px] text-[#212529]"
                  dangerouslySetInnerHTML={{ __html: data && data?.title_en }}
                ></p>
                <div
                  className="tab-content"
                  dangerouslySetInnerHTML={{ __html: data && data?.text_en }}
                ></div>
              </div>
            </Tabs.Panel>
          ))}
        </Tabs>
      </div>
      <div className="flex gap-[30px] items-end mt-[30px]">
        <p>Share:</p>
        <div className="flex items-center gap-[10px]">
          <Link
            href="/"
            className="uppercase border border-[#759acd] text-[#759acd] py-[8px] rounded-[5px] px-[12px] hover:bg-[#759acd] hover:text-white"
          >
            Facebook
          </Link>
          <Link
            href="/"
            className="uppercase border border-[#759acd] text-[#759acd] py-[8px] rounded-[5px] px-[12px] hover:bg-[#759acd] hover:text-white"
          >
            TWITTER
          </Link>
          <Link
            href="/"
            className="uppercase border border-[#59a683] text-[#59a683] py-[8px] rounded-[5px] px-[12px] hover:bg-[#59a683] hover:text-white"
          >
            copy LINK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
