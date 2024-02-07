import VolunterAtnac from "@/pages/VolunterAtnac/VolunterAtnac";

const page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "Volunteer At Nac",
      link: "#",
    },
  ];

  return (
    <>
      <title>Azcanet.ca - Volunteer at NAC</title>
      <VolunterAtnac pageNames={pageNames} />
    </>
  );
};

export default page;
