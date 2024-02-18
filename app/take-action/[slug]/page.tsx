import TakeActionSlug from "@/pages/TakeAction/TakeActionSlug";

export async function generateStaticParams() {
  const posts = await fetch("https://azcanet.ca/api/home").then((res) =>
    res.json()
  );

  return posts?.take?.map((post: any) => ({ slug: `${post?.slug}` }));
}

export default function page({ params }: any) {
  return (
    <>
      <TakeActionSlug params={params} />
    </>
  );
}
