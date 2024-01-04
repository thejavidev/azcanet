"use client";
import Spinner from "@/components/Spiner/Spiner";
import { Get } from "@/services/fetchServices";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import TwitterTimeLine from "./TwitterTimeLine";
import { typeHeader } from "@/types/apiType";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

interface CachedData {
  header: typeHeader[];
}

const Press: React.FC = () => {
  const [cachedData, setCachedData] = useState<any>(null);
  const twitter = useRef<any>();
  const targetSlug = "press-centre";
  const press_menu = useRef<any>();
  const pressCentreItem = (cachedData as CachedData)?.header.find(
    (item: typeHeader) => item?.slug_en === targetSlug
  );
  const altMenuItems = pressCentreItem ? pressCentreItem?.alt_menu : [];

  useEffect(() => {
    const cachedData = sessionStorage.getItem("myCacheKey");
    if (cachedData) {
      setCachedData(JSON.parse(cachedData)?.data);
    } else {
      Get()?.then((res) => {
        sessionStorage.setItem("myCacheKey", JSON.stringify(res));
        setCachedData(res?.press);
      });
    }
    setTimeout(() => {
      twitter?.current?.classList?.add("hidden");
    }, 2500);
  }, []);

  const openPressMenu = () => {
    press_menu?.current?.classList?.toggle("hidden");
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-5 px-[50px] py-[50px] lg:py-[20px] lg:px-[20px]">
        <div className="col-span-9  relative lg:col-span-12">
          <Image
            src={cachedData?.press?.src || "/azcanet.jpg"}
            width={1000}
            height={400}
            alt='press banner'
            className="!w-full h-[650px] object-cover lg:h-[400px]"
          />
          <div className="absolute w-[50%] lg:w-full bottom-[50px] lg:left-2 left-[50px] text-white">
            <h2 className="font-bold text-[22px] ">
              {cachedData?.press?.title_1_en}
            </h2>
            <p
              className="font-[400] text-[15px]  py-[1rem]"
              dangerouslySetInnerHTML={{
                __html: cachedData && cachedData?.press?.text_en,
              }}
            ></p>
            <div className="relative ">
              <div
                onClick={openPressMenu}
                className="flex items-center gap-3 bg-[#ec5a44] w-fit px-2 py-3 cursor-pointer"
              >
                <h1 className=" text-[16px] uppercase  font-semibold">
                  Our Statements
                </h1>
                <FaAngleDown />
              </div>
              <ul
                ref={press_menu}
                className="absolute bottom-[50px] left-0 right-0 bg-white w-fit hidden transition-all "
              >
                {altMenuItems &&
                  altMenuItems?.map((item, i) => (
                    <li
                      className="text-black cursor-pointer hover:bg-[#ec5a44] w-full  h-full flex  transition-all hover:text-white"
                      key={i}
                    >
                      <Link
                        className="w-full h-full px-2 py-2"
                        href={item?.slug_en ? item?.slug_en : ""}
                      >
                        {item?.menu_en}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-12  relative h-[650px]  overflow-hidden border-[1px] rounded-[12px]">
          <div
            ref={twitter}
            className="absolute top-[50%] left-[50%] text-[20px] text-black font-bold translate-x-[-50%] translate-y-[-50%] bg-[#fff] z-[30] w-full h-full flex items-center justify-center"
          >
            <Spinner count={10} />
          </div>
          <TwitterTimeLine />
        </div>
      </div>
    </>
  );
};

export default Press;
