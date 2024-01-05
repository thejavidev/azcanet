"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import FetchData from "@/helpers/FetchData";

const Media = () => {
  const { cachedData } = FetchData(["media"]);

  return (
    <>
      <div className="px-[50px] py-[20px] mb-10 lg:py-[20px] lg:px-[20px] ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cachedData &&
            cachedData?.media?.slice(0, 4)?.map((item: any, i: number) => {
              const apiDate = item?.date;
              const formattedDate = new Date(apiDate).toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              );
              return (
                <SwiperSlide key={i}>
                  <div className="swiper_hover">
                    <Link href={`/media/${item?.slug_en}`}>
                      <div className="relative overflow-hidden">
                        {item &&
                          item.src &&
                          item.src
                            ?.filter((elem: any) => elem?.is_cover === 1)
                            ?.slice(0, 1)
                            ?.map((elem: any, j: number) => (
                              <div key={j} className="w-full">
                                <img
                                  src={elem?.src}
                                  alt=""
                                  width={1000}
                                  height={1000}
                                  className="w-full object-cover h-[236.19px] "
                                />
                              </div>
                            ))}
                        <span className="absolute bottom-0 left-0 w-max h-[20px] flex items-center justify-center p-[16px] text-[17px] text-white bg-[#ec5a44]">
                          {formattedDate}
                        </span>
                      </div>
                      <p className="font-bold text-[16px] mt-2 text-[#212529] line-clamp-2 transition-all ease-linear">
                        {item?.title_en}
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default Media;
