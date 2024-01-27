import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommonData = ({ cachedData, next, href, notfoundImg }: any) => {
  return (
    <>
      <div>
        {cachedData &&
          cachedData?.slice(0, next)?.map((cur: any, i: number) => {
            const apiDate = cur?.date;
            const formattedDate = new Date(apiDate).toLocaleDateString(
              "en-GB",
              {
                day: "numeric",
                month: `short`,
                year: "numeric",
              }
            );
            return (
              <div
                key={i}
                className={`grid grid-cols-12 gap-16 px-[100px]  mt-5   pt-10`}
              >
                <div className=" col-span-7">
                  <div className="flex items-start justify-center flex-col h-full w-[90%]">
                    <h2 className="font-bold text-xl relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[#ec5a44]">
                      {cur?.title_en}
                    </h2>
                    <p
                      className="pt-4 line-clamp-2 "
                      dangerouslySetInnerHTML={{
                        __html: cur && cur?.intro_text_en,
                      }}
                    ></p>
                    <Link
                      className="mt-2 font-semibold text-xl"
                      href={`/${href}/${cur?.slug_en}`}
                    >
                      See more
                    </Link>
                  </div>
                </div>
                <div className="col-span-5 overflow-hidden rounded-md ">
                  {cur?.src &&
                    cur?.src?.map((item: any, i: number) => {
                      console.log(item);
                      return (
                        <div
                          key={i}
                          className="relative overflow-hidden rounded-md border-2 border-red-400"
                        >
                          {Array?.isArray(item?.src) &&
                            item?.src?.length === undefined && (
                              <Image
                                src="/notfound.webp"
                                alt="picture"
                                width={1000}
                                height={400}
                                className="w-full object-cover h-[300px] rounded-md overflow-hidden"
                              />
                            )}
                          <Image
                            src={item?.src}
                            alt="picture"
                            width={1000}
                            height={400}
                            className="w-full object-cover h-[300px] rounded-md overflow-hidden"
                          />

                          <span className="absolute bottom-0 left-0 w-max h-[20px] rounded-tr-md flex items-center justify-center p-[16px] text-[17px] text-white bg-[#ec5a44]">
                            {formattedDate}
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CommonData;
