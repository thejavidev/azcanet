import MediaSlug from "@/pages/Media/MediaSlug";

export async function generateStaticParams() {
  const posts = await fetch("https://azcanet.ca/api/home").then((res) =>
    res.json()
  );

  return posts?.media?.map((post: any) => ({ slug: `${post?.slug}` }));
}

export default function ({ params }: any)  {
  return (
    <>
      <title>Azcanet.ca - Media </title>

      <MediaSlug params={params} />
    </>
  );
};


