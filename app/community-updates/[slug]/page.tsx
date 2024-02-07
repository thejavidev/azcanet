// import { Get } from "@/services/fetchServices";

import CommunitySingle from "@/pages/Community/CommunitySingle";

const page = ({ params }: any) => {
  return (
    <>
      <title>Azcanet.ca - Community update </title>
      <CommunitySingle params={params} />
    </>
  );
};

export default page;

// export async function generateStaticParams() {
//   const data = await Get();

//   const comunityData = data?.comunity;
//   return comunityData?.map((ticket: any) => ({
//     fallback: false,
//     id: `${ticket?.id}`,
//   }));
// }
