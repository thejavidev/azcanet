"use client";
import { Get } from "@/services/fetchServices";
import { setSession, getSession, setFilterData } from "@/helpers/utils";
import { useEffect, useState } from "react";

const FetchData = (section: string[]) => {
  const [cachedData, setCachedData] = useState<any>([]);

  useEffect(() => {
    const fetchData = getSession("myCacheKey");

    if (fetchData) {
      const parsedData = JSON.parse(fetchData);

      setCachedData(setFilterData(parsedData, section));
    } else {
      Get()?.then((res) => {
        setSession("myCacheKey", res);

        setCachedData(setFilterData(res, section));
      });
    }
  }, []);

  return { cachedData };
};

export default FetchData;
