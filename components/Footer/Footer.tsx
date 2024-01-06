import FetchData from "@/helpers/FetchData";
import { typeHeader } from "@/types/apiType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CachedData {
  header: typeHeader[];
}

const Footer = () => {
  const { cachedData } = FetchData(["footer_bg", "header", "headerlogo_white"]);

  const getAltMenuItems = (slug: string, cachedData: CachedData) => {
    const item = (cachedData as CachedData)?.header?.find(
      (item: typeHeader) => item?.slug_en === slug
    );
    return item ? item.alt_menu : [];
  };

  const advocacy = "our-advocacy";
  const press = "press-centre";

  const altMenuadvocacyItems = getAltMenuItems(advocacy, cachedData);
  const altMenupressItems = getAltMenuItems(press, cachedData);


  const contact =[
    {
        id:1,
        name:'contact',
    },
    {
        id:2,
        name:"Email",
        mail:"info@azcanet.ca"
    },
    {
        id:3,
        name:"Address",
        adres:"676 Westburne Dr Unit 3, Vaughan, ON",
        link:"https://goo.gl/maps/GTrUeYcBX3uutQeC6"
    }
  ]

  return (
    <>
      <footer
        className={`relative bg-center  before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:-z-[1] before:bg-[#ec5a44]
       bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${cachedData?.footer_bg})` }}
      >
        <div className="grid grid-cols-12 gap-5 px-[100px] py-[30px]">
          <div className="col-span-3 ">
            <Link href="/" className="inline-block">
              <Image
                src={
                  cachedData?.headerlogo_white
                    ? cachedData?.headerlogo_white
                    : ""
                }
                className="w-[200px]"
                width={1000}
                height={100}
                alt="azcanet.ca"
              />
            </Link>
          </div>
          <div className="col-span-3  ">
            <Link
              className="p-[10px] text-[25px] text-white capitalize mb-2 inline-block"
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
                        className="text-white p-[10px] text-[18px]"
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
          <div className="col-span-3 ">
            <ul className="flex flex-col gap-4">
              {altMenupressItems &&
                altMenupressItems?.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link
                        className="text-white p-[10px] text-[18px]"
                        href={item?.slug_en ? item?.slug_en : ""}
                      >
                        {item?.menu_en}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-span-3 ">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/contact">contact</Link>
              </li>
              <li>
                <a href="mailto:info@azcanet.ca">
                  email : <span>info@azcanet.ca</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@azcanet.ca" target="_blank">
                  Adress :
                  <span>676 Westburne Dr Unit 3, Vaughan, ON L4K 4V5</span>
                </a>
              </li>
            </ul>
            <ul></ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
