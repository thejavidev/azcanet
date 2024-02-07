import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import SupportUs from "@/pages/SupportUs/SupportUs";

const page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "Support Us",
      link: "#",
    },
  ];

  return (
    <>
      <title>Azcanet.ca - Support Us</title>
      <Breadcrumb pageNames={pageNames} />
      <SupportUs />
    </>
  );
};

export default page;
