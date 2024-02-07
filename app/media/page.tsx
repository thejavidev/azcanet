import MediaPage from "@/pages/Media/MediaPage";

const page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "media",
      link: "#",
    },
  ];

  return (
    <>
      <title>Azcanet.ca - Media</title>
      <MediaPage pageNames={pageNames} />
    </>
  );
};

export default page;
