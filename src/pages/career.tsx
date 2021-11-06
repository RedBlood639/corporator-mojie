import type { NextPage } from "next";
import { Seo } from "components/Seo";
import metadata from "utils/metadata";
import Career from "views/Career";

const CareerPage: NextPage = () => {
  return (
    <>
      <Seo
        title={metadata.home.title}
        description={metadata.home.description}
      />
      <Career />
    </>
  );
};

export default CareerPage;
