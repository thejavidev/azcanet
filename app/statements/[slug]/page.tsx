import StatmentSlug from "@/pages/Statements/StatmentSlug";


export async function generateStaticParams() {
  const posts = await fetch("https://azcanet.ca/api/home").then((res) =>
    res.json()
  );

  return posts?.statements?.map((post: any) => ({ slug: `${post?.slug}` }));
}


export default function page({ params }: any) {
  return (
    <>
      <StatmentSlug params={params} />
    </>
  );
}
