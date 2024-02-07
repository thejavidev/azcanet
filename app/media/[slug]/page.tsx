import { motion as m } from "framer-motion";
import { useParams } from "next/navigation";
import { Get } from "@/services/fetchServices";
import MediaSlug from "../MediaSlug";

const page = () => {
  const { id } = useParams<any>();

  function shuffle(a: any) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  return (
    <>
      <title>Azcanet.ca - Media </title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <MediaSlug id={id} shuffle={shuffle} />
      </m.div>
    </>
  );
};

export default page;

export async function generateStaticParams() {
  const data = await Get();
  const mediaData = data?.media;

  return mediaData?.map((post: any) => ({
    fallback: false,
    slug: `${post?.slug_en}`,
  }));
}
