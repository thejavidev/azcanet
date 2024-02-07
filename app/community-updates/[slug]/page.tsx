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
