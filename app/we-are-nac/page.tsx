import WeAreNac from "@/pages/WeAreNac/WeAreNac";

const page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "We are nac",
      link: "#",
    },
  ];

  return (
    <>
      <title>Azcanet.ca - We are nac</title>
      <WeAreNac pageNames={pageNames} />
    </>
  );
};

export default page;
