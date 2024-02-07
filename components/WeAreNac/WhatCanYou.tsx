import FetchData from "@/helpers/FetchData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatCanYou = () => {
  const { cachedData } = FetchData(["who"]);
  const notfoundImg = "/notfound.webp";
  const cards = [
    {
      id: 1,
      link:`${cachedData?.who?.all?.link_1}`,
      src: `${cachedData?.who?.all?.photo_1}`,
      title: `${cachedData?.who?.all?.photo_1_text_en}`,
      bgColor: "blue",
    },
    {
      id: 2,
      src: `${cachedData?.who?.all?.photo_2}`,
      link:`${cachedData?.who?.all?.link_2}`,
      title: `${cachedData?.who?.all?.photo_2_text_en}`,
      bgColor: "red",
    },
    {
      id: 3,
      src: `${cachedData?.who?.all?.photo_3}`,
      link:`${cachedData?.who?.all?.link_3}`,
      title: `${cachedData?.who?.all?.photo_3_text_en}`,
      bgColor: "green",
    },
  ];

  return (
    <>
      <div className="mt-20 lg:mt-6 mb-10">
        <div className="flex items-center justify-center w-full flex-col">
          <h2
            className="font-bold text-4xl 2xl:text-2xl lg:tetx-xl text-center text-[#212529]"
            dangerouslySetInnerHTML={{
              __html: cachedData?.who?.all && cachedData?.who?.all?.title_1_en,
            }}
          ></h2>
          <p
            className="py-5"
            dangerouslySetInnerHTML={{
              __html: cachedData?.who?.all && cachedData?.who?.all?.text_en,
            }}
          ></p>
        </div>
        <ul className="grid grid-cols-12 gap-0">
          {cards &&
            cards?.map((item, i) => (
              <li
                key={i}
                className={`col-span-4 lg:col-span-12 relative overflow-hidden h-[570px] lg:h-[300px] cursor-pointer flag_part ${item?.bgColor}`}
              >
                <Link href={item?.link} className="inline-block w-full h-full ">
                  <img
                    src={item?.src ? item?.src : notfoundImg}
                    alt=""
                    width={1000}
                    height={530}
                    className="w-full h-[570px] lg:h-[300px] object-cover"
                  />
                  <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold flex justify-center items-center text-4xl 2xl:text-2xl lg:text-xl text-center text-white " dangerouslySetInnerHTML={{__html:item?.title && item?.title}}></div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default WhatCanYou;
