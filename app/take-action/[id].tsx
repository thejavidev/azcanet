import { useParams } from "next/navigation";
import React from "react";
import { motion as m } from "framer-motion";
import TakeSLug from "./TakeSLug";
import { Get } from "@/services/fetchServices";

const page = () => {
  const { id } = useParams<any>();

  return (
    <>
      <title>Azcanet.ca - Take action</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <TakeSLug id={id} />
      </m.div>
    </>
  );
};

export default page;

export async function generateStaticParams() {
  const data = await Get();
  const comunityData = data?.take;
  return comunityData?.map((ticket: any) => ({
    fallback: false,
    id: `${ticket?.id}`,
  }));
}
