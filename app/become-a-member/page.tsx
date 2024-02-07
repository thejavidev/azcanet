import BecomeAMember from "@/pages/BecomeAMember";

const page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "become a member",
      link: "#",
    },
  ];

  return (
    <>
      <title>Azcanet.ca - Become a member</title>
      <BecomeAMember pageNames={pageNames} />
    </>
  );
};

export default page;
