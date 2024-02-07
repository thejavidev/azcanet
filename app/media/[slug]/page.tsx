// import { Get } from "@/services/fetchServices";

import MediaSlug from "@/pages/Media/MediaSlug";

const page = ({ params }: any) => {


  return (
    <>
      <title>Azcanet.ca - Media </title>
     
      <MediaSlug params={params} />
    </>
  );
};

export default page;

// export async function generateStaticParams() {
//   const data = await Get();
//   const mediaData = data?.media;

//   return mediaData?.map((post: any) => ({
//     fallback: false,
//     slug: `${post?.slug_en}`,
//   }));
// }
