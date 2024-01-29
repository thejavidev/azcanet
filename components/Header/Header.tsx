"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import FetchData from "@/helpers/FetchData";
import { IoMdClose } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";

import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Header = () => {
  const { cachedData } = FetchData(["header", "navbar_colors", "sosials"]);

  const [isMobile, setIsMobile] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);
  const menu = useRef<any>();
  const searchParams = useSearchParams();
  const input = useRef<any>();
  const inputIcon = useRef<any>();
  const alt_item = useRef<any>();
  const opacityLi = useRef<any>();
  const inputMob = useRef<any>();
  const contactliInner = useRef<any>();
  const router = useRouter();
  const [inputValue, setInputValue] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenIcon, setIsMenuOpenIcon] = useState(false);
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
  function Close() {
    input?.current?.classList.remove("openInput");
    inputIcon?.current?.classList.add("inputIcon");
  }
  const openInput = () => {
    input?.current?.classList.add("openInput");
    inputIcon?.current?.classList.remove("inputIcon");
    input.current.focus();
  };
  const closeMob = () => {
    inputMob.current.classList.toggle("!right-0");
    inputMob.current.focus();
  };
  const closeInput = () => {
    Close();
  };
  const mobileSupport = isMobile ? "" : cachedData?.navbar_colors?.navbar_btn;

  const handleChange = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value.toLowerCase());
  };
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams || undefined);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      const query =
        inputValue !== undefined ? createQueryString("q", inputValue) : "";
      router.push(`/search/?${query}`);
      Close();
      closeMob();
      input.current.value = "";
      inputMob.current.value = "";
    }
  };
  const sosicals = [
    {
      id: 1,
      icon: <FaFacebook />,
      link: `${cachedData?.sosials?.facebook}`,
    },
    {
      id: 2,
      icon: <FaInstagramSquare />,
      link: `${cachedData?.sosials?.instagram}`,
    },
    {
      id: 3,
      icon: <FaTwitter />,
      link: `${cachedData?.sosials?.twitter}`,
    },
    {
      id: 4,
      icon: <FaYoutube />,
      link: `${cachedData?.sosials?.youtube}`,
    },
    {
      id: 5,
      icon: <FaLinkedin />,
      link: `${cachedData?.sosials?.linkedin}`,
    },
  ];
  const openContactMenu = () => {
    contactliInner.current.classList.toggle("contactliInnerMob");
  };
  const openSearch = () => {
    closeMob();
    setIsMenuOpenIcon(true);
  };
  const closeSearch = () => {
    closeMob();
    setIsMenuOpenIcon(false);
  };

  return (
    <>
      <header
        className={`  bg-white w-full shadow-header z-[200]  fixed top-0 left-0 right-0  `}
      >
        <nav className="py-[10px] px-[20px] xl:px-[10px] flex items-center relative  gap-4 xl:justify-between">
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
              className={` flex  gap-2    justify-evenly bg-[#fff]  w-full transition-all  xl:flex-col xl:fixed xl:top-[-100%] xl:right-0 xl:left-0 xl:px-8 md:px-2`}
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
                    <div className="w-full h-full  p-[8px] lg:p-[2px] uppercase bg-[#ec5a44] xl:bg-transparent rounded-md">
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
                          prefetch={true}
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
                                  prefetch={true}
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
              <li
                onClick={openContactMenu}
                className="flex gap-2 flex-col relative h-full p-[8px] cursor-pointer  uppercase bg-[#ec5a44] rounded-md tl  items-start justify-center  font-semibold text-white border-[1px] border-solid border-transparent  xl:justify-start xl:bg-transparent xl:text-[#ec5a44] xl:border-b-[1px] bg:border-solid xl:border-b-[#0000008a]  md:p-[4px] contactLi"
              >
                <div className="flex items-center">
                  <span className="text-lg 2xl:text-[13px]">contact</span>
                  <FaAngleDown />
                </div>
                <div
                  ref={contactliInner}
                  className={`absolute contactLi top-[55px] left-0 px-[20px] py-[20px] rounded-md right-0  w-[400px] h-auto text-black tl bg-[#fff]
                    ${isMobile ? "contactliInnerMob" : "contactliInner"}`}
                >
                  <div className="flex flex-col gap-2 bg-white">
                    <div className="flex items-center border-b-[1px] pb-3">
                      <span className="text-[13px] capitalize">
                        email :
                        <a
                          className="lowercase pl-1"
                          href={`mailto:${cachedData?.sosials?.email}`}
                        >
                          {cachedData?.sosials?.email}
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center border-b-[1px] pb-3">
                      <span className="text-[13px] capitalize">
                        adress :
                        <a
                          className="lowercase pl-1"
                          target="_blank"
                          href={`${cachedData?.sosials?.map}`}
                        >
                          {cachedData?.sosials?.unvan_en}
                        </a>
                      </span>
                    </div>
                    <ul className="flex items-center gap-5 mt-2">
                      {sosicals?.map((item, i) => (
                        <li
                          key={i}
                          className="text-[#f44] text-[25px] tl hover:-translate-y-2"
                        >
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
                </div>
              </li>
              <li
                onClick={openInput}
                className="flex h-full  px-[18px] cursor-pointer  uppercase xl:hidden  bg-[#ec5a44] lg:bg-transparent rounded-md tl  items-center justify-center text-lg font-semibold text-white border-[1px] border-solid lg:border-0 "
              >
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
              <li className="">
                <div className="flex items-center  w-full relative ">
                  <input
                    ref={input}
                    onKeyUp={(e) => handleKeyUp(e)}
                    onChange={handleChange}
                    className={`fixed inputSearch  top-[10px] right-[40px]  border-[1px] rounded-md  border-red-400 text-black  tl z-[300] px-[10px] py-[10px] outline-none`}
                    type="text"
                  />
                  <div
                    onClick={closeInput}
                    ref={inputIcon}
                    className="inputIcon"
                  >
                    <IoMdClose className="absolute  cursor-pointer right-[-10px] top-[10px] text-2xl z-[301]" />
                  </div>
                </div>
              </li>
            </ul>
            <div className="hidden xl:flex mt-1 mr-5">
              {isMenuOpenIcon ? (
                <IoMdClose onClick={closeSearch}  className="text-2xl text-[#ec5a44] cursor-pointer" />
              ) : (
                <FaSearch
                  onClick={openSearch}
                  className="text-xl text-[#ec5a44] cursor-pointer"
                />
              )}

              <input
                ref={inputMob}
                onKeyUp={(e) => handleKeyUp(e)}
                onChange={handleChange}
                className={`absolute  top-[70px] -right-full  border-[1px] rounded-md  border-red-400 text-black w-[80%]  tl z-[300] px-[10px] py-[10px] outline-none`}
                type="text"
              />
            </div>
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
