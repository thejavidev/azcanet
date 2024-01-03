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

  const db = [
    {
      id: 5,
      src: "https://azcanet.ca/files/banners/NXCuHfy7VdgUJfZZ5WFwEzkyurl885R1EwQHBN2O.webp",
      draft: 0,
      text_az: null,
      text_en:
        "Find out what your NAC Membership can do for our community today and tomorrow. 1",
      title_az: null,
      title_en: "The Largest Network of Azerbaijanis in Canada 1",
      button_az: null,
      button_en: "BECOME A NAC MEMBER 1",
      link: "https://azcanet.ca/menu/become-a-member",
    },
    {
      id: 6,
      src: "https://azcanet.ca/files/banners/NXCuHfy7VdgUJfZZ5WFwEzkyurl885R1EwQHBN2O.webp",
      draft: 0,
      text_az: null,
      text_en:
        "Find out what your NAC Membership can do for our community today and tomorrow. 2",
      title_az: null,
      title_en: "The Largest Network of Azerbaijanis in Canada 2",
      button_az: null,
      button_en: "BECOME A NAC MEMBER 2",
      link: "https://azcanet.ca/menu/become-a-member",
    },
  ];

  return (
    <>
      <Carousel banner={db} />
    </>
  );
};

export default page;
