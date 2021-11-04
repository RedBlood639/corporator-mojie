import type { NextPage } from "next";
import { Seo } from "components/Seo";
import metadata from "utils/metadata";
import About from "views/About";

const AboutPage: NextPage = () => {
  return (
    <>
      <Seo
        title={metadata.home.title}
        description={metadata.home.description}
      />
      <About />
    </>
  );
};

export default AboutPage;
