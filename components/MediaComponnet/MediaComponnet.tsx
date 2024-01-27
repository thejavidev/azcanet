import Link from "next/link";
import React from "react";

const MediaComponnet = ({ item, href ,classes}: any) => {
  return (
    <>
      <div className={`swiper_hover  ${classes}`}>
        <Link href={`/media/${href}`}>
          <div className="">
            {item &&
              item.src &&
              item.src
                ?.filter((elem: any) => elem?.is_cover === 1)
                ?.slice(0, 1)
                ?.map((elem: any, j: number) => {
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
                    <div key={j} className="w-full relative overflow-hidden">
                      <img
                        src={elem?.src}
                        alt=""
                        width={1000}
                        height={1000}
                        className="w-full object-cover h-[236.19px] "
                      />
                      <span className="absolute bottom-0 left-0 w-max h-[20px] flex items-center justify-center p-[16px] text-[17px] text-white bg-[#ec5a44]">
                        {formattedDate}
                      </span>
                    </div>
                  );
                })}
          </div>
          <p className="font-bold text-[16px] mt-2 text-[#212529] line-clamp-2 transition-all ease-linear">
            {item?.title_en}
          </p>
        </Link>
      </div>
    </>
  );
};

export default MediaComponnet;
