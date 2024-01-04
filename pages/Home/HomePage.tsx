"use client";

import { useEffect, useState } from "react";
import { Get } from "@/services/fetchServices";
import Carousel from "@/components/HomePage/Carousel/Carousel";
import Press from "@/components/HomePage/Press/Press";
import Contributor from "@/components/HomePage/Contributor/Contributor";
import Media from "@/components/HomePage/Media/Media";

const HomePage = () => {
  const [cachedData, setCachedData] = useState<any>(null);

  useEffect(() => {
    const cachedData = sessionStorage.getItem('myCacheKey');
    if (cachedData) {
      setCachedData(JSON.parse(cachedData)?.data?.banner);
    
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
      <Press />
      <Media />
      <Contributor />

    </>
  );
};

export default HomePage;
