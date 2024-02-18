import CommunitySingle from "@/pages/Community/CommunitySingle";

export async function generateStaticParams() {
  const posts = await fetch("https://azcanet.ca/api/home").then((res) =>
    res.json()
  );

  return posts?.comunity?.map((post: any) => ({ slug: `${post?.slug}` }));
}

export default function page({ params }: any) {
  return (
    <>
      <title>Azcanet.ca - Community update </title>
      <CommunitySingle params={params} />
    </>
  );
}
