import FetchData from "@/helpers/FetchData";
import StatementPage from "@/pages/Statements/StatementPage";

const page = ({}) => {
  const hrefLink = "statements";
  return (
    <>
      <title>Azcanet.ca - Statements</title>
      <StatementPage hrefLink={hrefLink} />
    </>
  );
};

export default page;
