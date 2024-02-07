"use client";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GlobalBanner from "@/components/GlobalBanner/GlobalBanner";
import SearchComponent from "@/components/Searching/SearchComponent";
import FetchData from "@/helpers/FetchData";

const SearchPage = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "Searching",
      link: "#",
    },
  ];
  const apiName = [
    "statements",
    "volunter_nac",
    "take",
    "comunity",
    "media",
    "involve",
    "press",
  ];
  const { cachedData } = FetchData(["options"]);
  const searchApi = FetchData(apiName);
  const [api, setApi] = useState([]);

  function pushData() {
    for (const name of apiName) {
      let a = searchApi?.cachedData?.[name];
      if (a) {
        if (Array.isArray(a)) {
          a.map((item) => setApi((prev): any => [...prev, { [name]: item }]));
        } else {
          setApi((prev): any => [...prev, { [name]: a }]);
        }
      }
    }
  }

  useEffect(() => {
    pushData();
  }, [cachedData]);
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <div className="mb-4">
          <GlobalBanner
            longtext={cachedData?.options?.search?.search_banner_title_en}
            bgColor={cachedData?.options?.navbar_colors?.section_bg}
            images={cachedData?.options?.search?.search_banner_src}
          />
        </div>
        <SearchComponent api={api} />
      </m.div>
    </>
  );
};

export default SearchPage;
