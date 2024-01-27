"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import FetchData from "@/helpers/FetchData";

const Header = () => {
  const { cachedData } = FetchData(["header", "navbar_colors"]);

  const [isMobile, setIsMobile] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);
  const menu = useRef<any>();
  const alt_item = useRef<any>();
  const opacityLi = useRef<any>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1299);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openAltMenu = (name: any) => {
    setOpenSubCategory((prev) => (prev === name ? null : name));
  };

  const openMenu = () => {
    const menuClassList = menu.current.classList;

    if (menuClassList.contains("xl:top-[-100%]")) {
      menuClassList.replace("xl:top-[-100%]", "xl:top-16");
      setIsMenuOpen(true);
    } else {
      menuClassList.replace("xl:top-16", "xl:top-[-100%]");
      setIsMenuOpen(false);
    }
  };

  const mobileSupport = isMobile ? "" : cachedData?.navbar_colors?.navbar_btn;

  return (
    <>
      <header
        className={`  bg-white w-full shadow-header z-[200] fixed top-0 left-0 right-0  `}
      >
        <nav className="py-[10px] px-[20px] xl:px-[10px] flex items-center  gap-4 xl:justify-between">
          <div className=" px-[40px] h-full xl:px-[10px]">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src={
                  cachedData?.headerlogo
                    ? cachedData?.headerlogo
                    : "https://azcanet.ca/nac/img/naclogo.svg"
                }
                width={140}
                height={100}
                alt="azcanet.ca"
              />
            </Link>
          </div>
          <div className="w-full flex justify-end ">
            <ul
              className={` flex  gap-2   justify-evenly bg-[#fff]  w-full transition-all  xl:flex-col xl:fixed xl:top-[-100%] xl:right-0 xl:left-0 xl:px-8`}
              ref={menu}
            >
              {cachedData?.header &&
                cachedData?.header?.map((item: any, i: number) => (
                  <li
                    key={i}
                    ref={opacityLi}
                    onClick={() => openAltMenu(item?.alt_menu)}
                    className={` nav_item flex gap-2 xl:gap-0  h-full  cursor-pointer  xl:transition-all xl:ease-out     tl  items-center justify-center text-lg font-semibold text-[#fff] border-[1px] border-solid border-transparent  relative z-[250]  xl:justify-start xl:bg-transparent xl:text-[#ec5a44] xl:border-b-[1px] bg:border-solid xl:border-b-[#0000008a] 2xl:text-[13px] md:p-[4px] xl:flex-col xl:items-start`}
                  >
                    <div className="w-full h-full  p-[8px] uppercase bg-[#ec5a44] xl:bg-transparent rounded-md">
                      {item?.alt_menu?.length > 0 ? (
                        <div className="flex items-center">
                          <h1 className="text-white xl:text-[#ec5a44] 2xl:text-[13px]">
                            {item?.menu_en}
                          </h1>
                          <FaAngleDown className={`xl:text-[#ec5a44] `} />
                        </div>
                      ) : (
                        <Link
                          href={item?.slug_en}
                          className="flex items-center"
                        >
                          <h1 className="text-white xl:text-[#ec5a44] 2xl:text-[13px]">
                            {item?.menu_en}
                          </h1>
                        </Link>
                      )}
                      {item?.alt_menu && item?.alt_menu?.length > 0 && (
                        <ul
                          ref={alt_item}
                          className={`absolute top-0 left-0 right-0 alt_item flex w-max xl:static bg-[#fff] xl:bg-transparent flex-col tlss rounded-md py-[7px] px-[20px] xl:px-[5px] tl opacity-0 invisible xl:opacity-100 xl:visible  ${
                            isMobile
                              ? openSubCategory === item?.alt_menu
                                ? "xl:flex h-auto bg-[#fff]"
                                : "xl:hidden h-0"
                              : ""
                          }`}
                        >
                          {item?.alt_menu?.map((item: any, i: number) => {
                            return (
                              <li
                                key={i}
                                className="text-[#4f4f4f] capitalize  hover:text-[#ec5a44] tl inline-block text-[14px]"
                              >
                                <Link
                                  className="py-[14px] xl:py-[5px] inline-block"
                                  href={`/${item?.slug_en}`}
                                >
                                  {item?.menu_en}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              <li className="flex gap-2 h-full p-[8px] cursor-pointer  uppercase bg-[#ec5a44] rounded-md tl  items-center justify-center text-lg font-semibold text-white border-[1px] border-solid border-transparent  xl:justify-start xl:bg-transparent xl:text-[#ec5a44] xl:border-b-[1px] bg:border-solid xl:border-b-[#0000008a] 2xl:text-[13px] md:p-[4px]">
                <span>contact</span>
                <div>
                  <FaAngleDown />
                </div>
              </li>
              <li className="flex h-full px-[18px] cursor-pointer  uppercase xl:hidden  bg-[#ec5a44] lg:bg-transparent rounded-md tl  items-center justify-center text-lg font-semibold text-white border-[1px] border-solid lg:border-0 ">
                <IoSearch className="text-[25px] xl:text-[#ec5a44]" />
              </li>
              <li
                style={{
                  background: mobileSupport,
                }}
                className={` flex gap-2 h-full  p-[8px] cursor-pointer   uppercase rounded-md tl  items-center justify-center text-lg font-semibold text-white border-[1px] border-solid border-transparent xl:items-start xl:justify-start xl:bg-transparent xl:text-[#ec5a44] 2xl:text-[13px] md:p-[4px]`}
              >
                <Link
                  href="/supportus"
                  target="_blank"
                  className="text-white xl:text-[#ec5a44]"
                >
                  support us
                </Link>
              </li>
            </ul>
            <div className="hidden xl:flex">
              <button
                onClick={openMenu}
                className="flex h-full px-[18px] xl:px-[10px] cursor-pointer  uppercase   bg-[#ec5a44] xl:bg-transparent rounded-md tl  items-center justify-center text-lg font-semibold text-white border-[1px] border-solid xl:border-0 "
              >
                {isMenuOpen ? (
                  <AiOutlineClose className="text-[30px] text-[#ec5a44]" />
                ) : (
                  <RiMenu3Fill className="text-[30px] text-[#ec5a44]" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
