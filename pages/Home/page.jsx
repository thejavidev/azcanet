"use client";
import Carousel from "@/components/Carousel/page";
import { useEffect, useState } from "react";
import { Get } from "@/services/fetchServices";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Get().then((res) => {
      setData(res?.banner);
    });
  }, []);

  return (
    <>
      <Carousel banner={data} />
    </>
  );
};

export default page;
