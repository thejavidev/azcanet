import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

import React, { useState } from "react";

import TakeAction from "@/pages/TakeAction/TakeAction";
const Page = () => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "take action",
      link: "#",
    },
  ];

  return (
    <>
      <title>Azcanet.ca - Take action</title>
      <Breadcrumb pageNames={pageNames} />
      <TakeAction />
    </>
  );
};

export default Page;
