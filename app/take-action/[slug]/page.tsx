import TakeActionSlug from "@/pages/TakeAction/TakeActionSlug";
// import { Get } from "@/services/fetchServices";

const page = ({ params }: any) => {
  return (
    <>
      <TakeActionSlug params={params} />
    </>
  );
};

export default page;

// export async function generateStaticParams() {
//   const data = await Get();
//   const comunityData = data?.take;
//   return comunityData?.map((ticket: any) => ({
//     fallback: false,
//     id: `${ticket?.id}`,
//   }));
// }
