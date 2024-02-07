"use client";
import FetchData from "@/helpers/FetchData";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const NOA = () => {
  const { cachedData } = FetchData(["who"]);
  const openM = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    openM?.current?.classList?.remove("hidden");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    openM?.current?.classList?.add("hidden");
    setIsModalOpen(false);
  };

  const counter = [
    {
      id: 1,
      color: "#ec5a44",
      count: `${cachedData?.who?.counter?.events}`,
      title: "organized events",
    },
    {
      id: 2,
      color: "#59a683",
      count: `${cachedData?.who?.counter?.parliament}`,
      title: "chapters",
    },
    {
      id: 3,
      color: "#7d63a7",
      count: `${cachedData?.who?.counter?.programs}`,
      title: "page audience",
    },
  ];
  const notfoundImg = "/notfound.webp";
  return (
    <>
      <div className="relative mt-10 lg:mt-0 mb-16 px-[100px] 2xl:px-[50px] lg:p-[20px]">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 lg:col-span-12  relative ">
            <Image
              className="w-full h-[450px] object-contain lg:h-auto"
              width={1000}
              height={400}
              onClick={openModal}
              src={
                cachedData?.who?.section_1?.section_one_src
                  ? cachedData?.who?.section_1?.section_one_src
                  : notfoundImg
              }
              alt=""
            />
            <span
              onClick={openModal}
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white cursor-pointer"
            >
              <FaPlay className="text-[35px]" />
            </span>

            <div
              ref={openM}
              className={`hidden relative ${
                isModalOpen ? "fadeInNoa" : "fadeOutNoa"
              }`}
            >
              <div
                onClick={closeModal}
                className="fixed top-0 left-0 right-0 w-full h-screen bg-overlay z-[1150] "
              ></div>
              <div className="w-[700px] h-[500px] lg:w-[300px] lg:h-[300px] bg-[#fff] p-[5px] absolute flex items-center justify-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[1555] ">
                <iframe
                  className="w-full h-full"
                  src={cachedData?.who?.section_1?.section_one_video_link}
                ></iframe>
                <span
                  onClick={closeModal}
                  className="absolute -right-8 lg:right-0 -top-8  cursor-pointer text-white"
                >
                  
                  <IoMdClose className="text-[35px]" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-12 p-[40px] 2xl:p-[20px] lg:p-0">
            <div className="flex items-start flex-col justify-center h-full">
              <h2 className="font-bold text-4xl 2xl:text-2xl text-[#212529]">
                {cachedData?.who?.section_1?.section_one_title_1_en}
              </h2>
              <p
                className="mt-[10px] text-lg w-[70%] xl:w-full"
                dangerouslySetInnerHTML={{
                  __html:
                    cachedData?.who?.section_1?.section_one_text_en &&
                    cachedData?.who?.section_1?.section_one_text_en,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className=" mt-14 w-full">
          <ul className="w-full grid grid-cols-12 gap-5">
            {counter &&
              counter?.map((cur, i) => (
                <div
                  key={i}
                  className="col-span-4 lg:col-span-6 md:col-span-12  transition-all ease-out hover:scale-[1.04]"
                >
                  <li
                    style={{ backgroundColor: cur?.color }}
                    className="flex flex-col items-center justify-center gap-3 p-[25px] 2xl:p-[15px] text-center text-white rounded-xl"
                  >
                    <h2 className="font-bold text-4xl 2xl:text-2xl">{cur?.count}</h2>
                    <span className="font-normal text-2xl 2xl:text-xl capitalize">
                      {cur?.title}
                    </span>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NOA;
