"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GrPrevious, GrNext } from "react-icons/gr";
import FetchData from "@/helpers/FetchData";

const Carousel = () => {
  const { cachedData } = FetchData(["banner"]);
  console.log(cachedData);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === cachedData?.banner?.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? cachedData?.banner?.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      {cachedData?.banner && (
        <div className="slider-wrapper">
          <div className="slider-content">
            <h3 className="font-[700] text-[64px] mb-[5px] tracking-[1.28px]">
              {cachedData?.banner?.[currentSlide]?.title_en}
            </h3>
            <p className="pt-[20px] font-[400] text-[24px]">
              {cachedData?.banner?.[currentSlide]?.text_en}
            </p>
            <Link
              href={`${cachedData?.banner?.[currentSlide]?.link}`}
              target="_blank"
              className="mt-[20px] px-[16px] py-[10px] w-fit bg-[#ec5a44] hover-effect uppercase hover:bg-white hover:text-[#ec5a44] border border-[#ec5a44] text-white rounded-[4px] font-[400] flex items-center hover:gap-[20px] gap-[10px]"
            >
              {cachedData?.banner?.[currentSlide]?.button_en}
              <FaArrowRight />
            </Link>
          </div>
          <div className="slider">
            <div className="slider-item">
              <Image
                src={
                  cachedData?.banner?.[currentSlide]?.src
                    ? cachedData?.banner?.[currentSlide]?.src
                    : cachedData?.banner?.[currentSlide]?.src
                }
                width={1000}
                height={500}
                alt="Picture of the banner"
                className="w-full h-auto object-cover object-center"
              />
            </div>
            {cachedData?.banner?.length > 1 && (
              <div className="slider-bts">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="slider-btn prev"
                >
                  {<GrPrevious />}
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="slider-btn next"
                >
                  {<GrNext />}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
