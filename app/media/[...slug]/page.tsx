"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { motion as m } from "framer-motion";
import FetchData from "@/helpers/FetchData";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import Media from "@/components/HomePage/Media/Media";
import { useEffect, useState } from "react";
import { CopyNotification } from "@/components/CopyNotification/CopyNotification";
import Share from "@/components/Share/Share";

const page = () => {
  const { cachedData } = FetchData(["media"]);
  const { slug } = useParams<any>();
  const currentPost = cachedData?.media?.find(
    (post: any) => post?.slug_en === slug?.[0]
  );
  const [showNotification, setShowNotification] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");

  const CopyLink = () => {
    const link = window?.location?.href;
    setCopiedLink(link);
    setShowNotification(true);
    navigator?.clipboard?.writeText(link);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

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
      <title>Azcanet.ca - Media </title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
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
                  className="w-full h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="tab-content px-[100px] py-[50px] media">
          <p
            dangerouslySetInnerHTML={{
              __html: currentPost && currentPost?.text_en,
            }}
          ></p>
          <Share copyLink={CopyLink} />
        </div>

        {showNotification && <CopyNotification link={copiedLink} />}
        <h3 className="font-bold text-4xl mb-3 mt-3 px-[50px] capitalize">
          More News
        </h3>
        <Media />
      </m.div>
    </>
  );
};

export default page;
