import { Get } from "@/services/fetchServices";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Contributor = () => {
  const [cachedData, setCachedData] = useState<any>(null);
  useEffect(() => {
    const cachedData = sessionStorage.getItem("myCacheKey");
    if (cachedData) {
      setCachedData(JSON.parse(cachedData)?.data);
    } else {
      Get()?.then((res) => {
        sessionStorage.setItem("myCacheKey", JSON.stringify(res));
        setCachedData(res?.p_mission);
      });
    }
  }, []);
  return (
    <>
      <div className="">
        <div className="relative ">
          <Image
            src={cachedData?.p_mission?.pmission_src || "/azcanet.jpg"}
            width={1000}
            height={400}
            alt="press banner"
            className="!w-full h-[550px] object-cover lg:h-[400px]"
          />
          <div className="absolute w-[50%] lg:w-full top-[50%]  left-[4%] translate-x-[0%] translate-y-[-50%] text-black">
            <h2 className="font-bold text-[40px] ">
              {cachedData?.p_mission?.pmission_title_1_en}
            </h2>
            <p
              className="font-[400] text-[15px]  py-[1rem] mt-5"
              dangerouslySetInnerHTML={{
                __html: cachedData && cachedData?.p_mission?.pmission_text_en,
              }}
            ></p>
            <div className="mt-5">
              <div className="flex items-center gap-3  w-fit  h-full  cursor-pointer ">
                <Link href='/supportus' target="_blank" className="w-full h-full flex items-center gap-4 border-2 px-2 py-3 rounded-md bg-[#ec5a44]">
                  <h1 className=" text-[16px] text-white uppercase  font-semibold">
                    {cachedData?.p_mission?.pmission_button_en}
                  </h1>
                  <FaArrowRightLong className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contributor;
