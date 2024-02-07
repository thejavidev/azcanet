"use client";
import FetchData from "@/helpers/FetchData";
import { Get } from "@/services/fetchServices";
import React, { useEffect, useState } from "react";
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from "next/image";
import Share from "@/components/Share/Share";
import { CopyNotification } from "@/components/CopyNotification/CopyNotification";
import Media from "@/components/HomePage/Media/Media";

const MediaSlug = ({ id, shuffle }: any) => {
  const { cachedData } = FetchData(["media"]);
  const currentPost = cachedData?.media?.find((post: any) => post?.id === id);
  const [showNotification, setShowNotification] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const CopyLink = () => {
    const link = window?.location?.href;
    setCopiedLink(link);
    setShowNotification(true);
    navigator?.clipboard?.writeText(link);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "media",
      link: "#",
    },
    {
      name: `${currentPost?.title_en}`,
      link: `#`,
    },
  ];
  return (
    <>
      <Breadcrumb pageNames={pageNames} />
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mediadetails"
      >
        {currentPost?.src &&
          currentPost?.src?.map((item: any, i: number) => (
            <SwiperSlide key={i}>
              <Image
                src={item?.src}
                alt=""
                width={1000}
                height={350}
                className="w-full h-[350px] lg:h-[250px] object-cover"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="tab-content px-[100px] py-[50px] 2xl:px-[50px] lg:px-[20px] media">
        <p
          dangerouslySetInnerHTML={{
            __html: currentPost && currentPost?.text_en,
          }}
        ></p>
        <Share copyLink={CopyLink} />
      </div>

      {showNotification && <CopyNotification link={copiedLink} />}
      <h3 className="font-bold text-4xl 2xl:text-2xl lg:text-xl mb-3 mt-3 px-[50px] lg:px-[20px] capitalize">
        More News
      </h3>
      <Media shuffle={shuffle} />
    </>
  );
};

export default MediaSlug;

export async function generateStaticParams() {
  const data = await Get();
  const comunityData = data?.media;
  return comunityData.map((ticket: any) => ({
    id: `${ticket.id}`,
  }));
}
