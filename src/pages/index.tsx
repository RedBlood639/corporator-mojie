import type { NextPage } from "next";
import { Seo } from "components/Seo";
import metadata from "utils/metadata";
import Home from "views/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Seo
        title={metadata.home.title}
        description={metadata.home.description}
      />
      <Home />
    </>
  );
};

export default HomePage;
