import { motion as m } from "framer-motion";

import { useParams } from "next/navigation";
import { Get } from "@/services/fetchServices";

import ComunitySlug from "../componnets";

const page = () => {
  const { id } = useParams<any>();

  return (
    <>
      <title>Azcanet.ca - Community update</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <ComunitySlug id={id} />
      </m.div>
    </>
  );
};

export default page;

export async function generateStaticParams() {
  const data = await Get();

  const comunityData = data?.comunity;
  return comunityData?.map((ticket: any) => ({
    fallback: false,
    id: `${ticket?.id}`,
  }));
}
