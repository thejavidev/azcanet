"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import FetchData from "@/helpers/FetchData";
import MediaComponnet from "@/components/MediaComponnet/MediaComponnet";

const Media = ({ shuffle }: any) => {
  const { cachedData } = FetchData(["media"]);
  let mediaData = cachedData?.media;

  // Apply shuffle logic only if the shuffle prop is provided
  if (shuffle && mediaData) {
    mediaData = shuffle(Array?.from(mediaData));
  }
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
          {mediaData &&
            mediaData?.slice(0, 4).map((item: any, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <MediaComponnet href={item?.slug_en} item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default Media;
