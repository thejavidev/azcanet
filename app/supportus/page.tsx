"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import FetchData from "@/helpers/FetchData";
import { motion as m } from "framer-motion";

import Link from "next/link";

const page = () => {
  const { cachedData } = FetchData(["options"]);
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "Support Us",
      link: "#",
    },
  ];
  const cards = [
    {
      id: 1,
      link: `${cachedData?.options?.support?.support_card_1_link}`,
      title: `${cachedData?.options?.support?.support_credit_card}`,
      text: `${cachedData?.options?.support?.support_card_1_text}`,
    },
    {
      id: 2,
      link: "#",
      title: `${cachedData?.options?.support?.support_e_transfer}`,
      text: `${cachedData?.options?.support?.support_card_2_text}`,
    },
    {
      id: 3,
      link: "#",
      title: `${cachedData?.options?.support?.support_e_cheque}`,
      text: `${cachedData?.options?.support?.support_card_3_text}`,
    },
  ];
  return (
    <>
       <title>Azcanet.ca - Support Us</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Breadcrumb pageNames={pageNames} />
        <div className="mt-5 py-[30px] px-[150px] text-center">
          <p
            className="uppercase text-2xl font-bold mb-3 mt-6"
            dangerouslySetInnerHTML={{
              __html: cachedData?.options?.support?.support_top_title,
            }}
          ></p>
          <p
            className="text-lg px-5 py-0 m-0"
            dangerouslySetInnerHTML={{
              __html: cachedData?.options?.support?.support_top_title_2,
            }}
          ></p>
          <p
            className="text-lg px-5 py-0 mt-5"
            dangerouslySetInnerHTML={{
              __html: cachedData?.options?.support?.support_top_title_3,
            }}
          ></p>
          <div className="grid grid-cols-12 gap-6 mt-10 mb-20">
            {cards &&
              cards?.map((elem, i) => {
                let hostName = "";
                if (elem?.link?.startsWith("http")) {
                  let url = new URL(elem?.link);
                  hostName = url.host;
                } else {
                  hostName = window.location.host;
                }
                return (
                  <div key={i} className="col-span-4 tl hover:scale-105">
                    <div className="flex items-center justify-center flex-col  h-full">
                      <Link
                        target={
                          window.location.host !== hostName ? "_blank" : ""
                        }
                        href={elem?.link}
                        className="inline-block w-full h-full "
                      >
                        <div className="h-full border-[1px] border-solid border-[#ec5a44] rounded-md">
                          <div className="bg-[#ec5a44] px-[15px] py-[10px]">
                            <h3 className="text-white uppercase font-semibold">{elem?.title}</h3>
                          </div>
                          <div className="mt-3 px-[10px] py-[20px]">
                            <h6 className="uppercase text-sm">{elem?.text}</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="contentstatments" dangerouslySetInnerHTML={{__html: cachedData?.options?.support?.support_bottom_text}}>

          </div>
        </div>
      </m.div>
    </>
  );
};

export default page;
