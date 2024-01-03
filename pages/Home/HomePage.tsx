"use client";

import { useEffect, useState } from "react";
import { Get } from "@/services/fetchServices";
import Carousel from "@/components/Carousel/Carousel";

const HomePage = () => {
  const [cachedData, setCachedData] = useState<any>(null);

  useEffect(() => {
    const cachedData = sessionStorage.getItem('myCacheKey');
    if (cachedData) {
      setCachedData(JSON.parse(cachedData)?.banner);
   
    } else {
      Get().then((res) => {
        sessionStorage.setItem("myCacheKey", JSON.stringify(res));
        setCachedData(res?.banner);
      });
    }
  }, []);

  return (
    <>
      <Carousel banner={cachedData} />
    </>
  );
};

export default HomePage;
