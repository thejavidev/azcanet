"use client"
import FetchData from "@/helpers/FetchData";
import { typeHeader } from "@/types/apiType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

interface CachedData {
  header: typeHeader[];
}

const Footer = () => {
  const { cachedData } = FetchData([
    "footer_bg",
    "header",
    "headerlogo_white",
    "options",
  ]);

  const getAltMenuItems = (slug: string, cachedData: CachedData) => {
    const item = (cachedData as CachedData)?.header?.find(
      (item: typeHeader) => item?.slug_en === slug
    );
    return item ? item?.alt_menu : [];
  };

  const advocacy = "our-advocacy";
  const press = "press-centre";

  const altMenuadvocacyItems = getAltMenuItems(advocacy, cachedData);
  const altMenupressItems = getAltMenuItems(press, cachedData);

  const contact = [
    {
      id: 1,
      name: "contact",
    },
    {
      id: 2,
      name: "Email",
      mail: `${cachedData?.options?.sosials?.email}`,
    },
    {
      id: 3,
      name: "Address",
      adres: `${cachedData?.options?.sosials?.unvan_en}`,
      link: `${cachedData?.options?.sosials?.map}`,
    },
    {
      id: 4,
      sosicals: [
        {
          id: 1,
          icon: <FaFacebook />,
          link: `${cachedData?.options?.sosials?.facebook}`,
        },
        {
          id: 2,
          icon: <FaInstagramSquare />,
          link: `${cachedData?.options?.sosials?.instagram}`,
        },
        {
          id: 3,
          icon: <FaTwitter />,
          link: `${cachedData?.options?.sosials?.twitter}`,
        },
        {
          id: 4,
          icon: <FaYoutube />,
          link: `${cachedData?.options?.sosials?.youtube}`,
        },
        {
          id: 5,
          icon: <FaLinkedin />,
          link: `${cachedData?.options?.sosials?.linkedin}`,
        },
      ],
    },
  ];
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className={`relative bg-center mt-8  before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:-z-[1] before:bg-[#ec5a44]
       bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${cachedData?.footer_bg})` }}
      >
        <div className="grid grid-cols-12 gap-5 xl:gap-2 px-[100px] xl:px-[50px] py-[30px] md:px-[20px]">
          <div className="col-span-3 lg:col-span-6 md:col-span-12 md:mb-2">
            <Link href="/" className="inline-block">
              <Image
                src={
                  cachedData?.headerlogo_white
                    ? cachedData?.headerlogo_white
                    : "/notfound.webp"
                }
                className="w-[200px] xl:w-[150px]"
                width={1000}
                height={100}
                alt="azcanet.ca"
              />
            </Link>
          </div>
          <div className="col-span-3  lg:col-span-6 lg:mb-3 md:col-span-12">
            <Link
              className="text-[25px] xl:text-[20px] md:text-[16px] text-white capitalize mb-2 inline-block"
              href="/we-are-nac"
            >
              we are nac
            </Link>
            <ul className="flex flex-col gap-4">
              {altMenuadvocacyItems &&
                altMenuadvocacyItems?.map((item, i) => {
                  let hostName = "";
                  if (item?.slug_en?.startsWith("https")) {
                    let url = new URL(item?.slug_en);
                    hostName = url.host;
                  } else {
                    hostName = window.location.host;
                  }
                  return (
                    <li key={i}>
                      <Link
                        className="text-white py-[10px] text-[18px] md:text-[16px]"
                        href={item?.slug_en ? item?.slug_en : ""}
                        target={
                          window.location.host !== hostName ? "_blank" : ""
                        }
                      >
                        {item?.menu_en}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-span-3 lg:col-span-6 md:col-span-12 md:mb-4">
            <ul className="flex flex-col gap-4">
              {altMenupressItems &&
                altMenupressItems?.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link
                        className="text-white p-[10px] md:py-[5px] md:px-0 text-[18px] md:text-[16px]"
                        href={item?.slug_en ? item?.slug_en : ""}
                      >
                        {item?.menu_en}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-span-3 lg:col-span-6 md:col-span-12">
            <ul className="flex flex-col gap-4 ">
              {contact &&
                contact?.map((cur, i) => (
                  <li
                    key={i}
                    className="flex items-start md:items-center gap-3 text-white text-md"
                  >
                    {(cur?.id === 1 || cur?.id === 2 || cur?.id === 3) && (
                      <h3 className="capitalize">
                        {cur?.name}
                        {(cur?.id === 2 || cur?.id === 3) && (
                          <span className="pl-3">:</span>
                        )}
                      </h3>
                    )}
                    {cur?.id === 2 && (
                      <a className="text-sm" href={`mailto:${cur?.mail}`}>
                        {cur?.mail}
                      </a>
                    )}
                    {cur?.id === 3 && (
                      <a
                        href={`${cur?.link}`}
                        className="text-sm columns-2 md:columns-1"
                        target="_blank"
                      >
                        {cur?.adres}
                      </a>
                    )}
                    {cur?.id === 4 && (
                      <div>
                        <ul className="flex items-center gap-3  ">
                          {cur?.sosicals?.map((item, i) => (
                            <li key={i} className="text-white text-[25px]">
                              <a
                                href={item?.link}
                                className="inline-block md:text-[20px]"
                                target="_blank"
                              >
                                {item?.icon}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between w-full items-center py-[15px] px-[100px] xl:px-[50px] md:px-[20px]">
          <h2 className="text-white text-lg md:text-sm">
            All rights reserved © <span>{year}</span>
          </h2>
          <h2>
            <a
              href="https://shamans.az/"
              target="_blank"
              className="flex items-center gap-1 text-white text-xl  md:text-sm"
            >
              Website by
              <img
                src={`${cachedData?.options?.sosials?.shamans}`}
                width={100}
                height={100}
                alt="shamans"
                className="w-[25px] h-[25px] object-contain"
              />
            </a>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
